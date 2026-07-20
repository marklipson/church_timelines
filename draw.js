/**
 * DRAW TIMELINE
 */
class Timeline
{
  constructor(div_id, time_range)
  {
    this.div = document.getElementById(div_id);
    this.svg = null;
    this.time_range = time_range;
    this.time_step = 10;
    this.top_to_bottom = true;
    this.timeline_y = 10;
    this.pix_per_year = 8.5;
    this.max_detail_level = 2;
  }

  year_x(year)
  {
    return 24 + (year - this.time_range[0]) * this.pix_per_year;
  }

  slot_y(slot)
  {
    if (this.top_to_bottom)
      return 50 + slot * 24;
    else
      return 50 + slot * 24;
  }

  draw_years()
  {
    for (let year=this.time_range[0]; year <= this.time_range[1]; year += this.time_step)
    {
        const el = document.createElement("span");
        this.div.appendChild(el);
        el.innerText = `${year}`;
        if (this.top_to_bottom)
          el.style.top = this.timeline_y + "px";
        else
          el.style.bottom = this.timeline_y + "px";
        el.style.left = this.year_x(year) + "px";
        el.classList.add("time_axis")
    }
  }

  draw_people()
  {
    let slot_end = [-10, 33];
    for (const person of people)
    {
        //if (! core_figures.includes(person.name))
        //  continue;
        if (person.heretic)
          continue;
        if (person.p > this.max_detail_level)
          continue;
        const el = document.createElement("span");
        this.div.appendChild(el);
        el.innerText = person.name;
        el.setAttribute("id", "p_" + person.name.replaceAll(' ', '_'));
        if (person.category.includes("martyr"))
        {
          el.innerHTML += "<span class='martyr' title='martyr'>&#9840;</span>";
          // &#9766;
        }
        if (person.category.includes("writer") || person.category.includes("evangelist"))
        {
          el.innerHTML += "<span class='writer' title='writer'>&#x1F56E;</span>";
        }
        if (person.category.includes("bishop"))
        {
          el.innerHTML += "<span class='bishop' title='bishop'>&#9821;</span>";
        }
        if (person.category.includes("missionary"))
        {
          el.innerHTML += "<span class='missionary' title='missionary'>&#9767;</span>";
        }
        if (person.category.includes("monk"))
        {
          el.innerHTML += "<span class='monk' title='monk'>&#10013;</span>";
        }
        if (person.category.includes("emperor"))
        {
          el.innerHTML += "<span class='emperor' title='emperor'>&#128081;</span>";
        }
        const birth = (person.birth_range[0] + person.birth_range[1])/2;
        let death = (person.death_range[0] + person.death_range[1])/2;
        const r_limit = this.time_range[1] + 10;
        if (death > r_limit)
        {
          death = r_limit;
        }
        var use_slot;
        for (use_slot=0; use_slot < slot_end.length; use_slot++)
        {
          if (birth > slot_end[use_slot] + 2)
            break;
        }
        if (this.top_to_bottom)
          el.style.top = this.slot_y(use_slot) + "px";
        else
          el.style.bottom = this.slot_y(use_slot) + "px";
        el.style.left = this.year_x(birth) + "px";
        el.style.width = (this.year_x(death) - this.year_x(birth)) + "px";
        el.setAttribute("title", person.name + ": " + person.biography)
        el.classList.add("person")
        for (const cat of person.category)
        {
          el.classList.add("cat_" + cat)
        }
        slot_end[use_slot] = death;
    }
  }

  find_person(name)
  {
    const el = document.getElementById("p_" + name.replaceAll(' ', '_'));
    if (el)
      return [el];
    return [];
  }

  find_person_rec(name)
  {
    for (const rec of people)
    {
      if (rec.name == name)
        return rec;
    }
  }

  draw_events()
  {
    function emphasis(on) {
      for (const el of document.getElementsByClassName("event"))
      {
        if (on)
          el.classList.add("emphasize");
        else
          el.classList.remove("emphasize");
      }
    }
    for (const event of events)
    {
        if (event.p > this.max_detail_level)
          continue;
        let tr = event.time_range;
        const el = document.createElement("span");
        this.div.appendChild(el);
        el.innerText = event.name;
        el.setAttribute("title", event.name + ": " + event.description)
        el.classList.add("event")
        if (tr[1] - tr[0] < 2)
        {
          tr = [tr[0]-1, tr[1]+1];
        }
        el.style.left = this.year_x(tr[0]) + "px";
        el.style.width = (this.year_x(tr[1]) - this.year_x(tr[0])) + "px";
        el.style.top = (this.top_to_bottom ? 32 : 8) + "px";
        el.style.bottom = 8 + "px";
        for (const cat of event.category)
        {
          el.classList.add("cat_" + cat);
        }
        el.addEventListener("mouseover", () => emphasis(1));
        el.addEventListener("mouseout", () => emphasis(0));
    }
    // hover over any event: make them bolder or something

  }

  set_selection(name)
  {
    this.clear_selection();
    // show as selected
    const p_focus = this.find_person(name);
    if (! p_focus)
      return;
    const person_el = p_focus[0];
    const person_rec = this.find_person_rec(name);
    person_el.classList.add("selected");
    // highlight all relations
    let rel_detail = "";
    for (const rel of relationships)
    {
      if (rel.from == name)
      {
        const p_to = this.find_person_rec(rel.to);
        this.find_person(rel.to).forEach(elem=>elem.classList.add("highlighted"));
        const rel_txt = relationship_text?.[rel.relationship]??(rel.relationship.replaceAll('_', ' ') + ':');
        if (p_to)
          rel_detail += `<li>${rel_txt} <b>${p_to.name}</b>. ${rel?.description??""}</li>`
      }
      if (rel.to == name)
      {
        const p_from = this.find_person_rec(rel.from);
        this.find_person(rel.from).forEach(elem=>elem.classList.add("highlighted"));
        const rel_inv = relationship_inverse?.[rel.relationship]??"related to";
        if (p_from)
          rel_detail += `<li>${rel_inv} <b>${p_from.name}</b>. ${rel?.description??""}</li>`
      }
    }
    // show detail pane
    const details = document.createElement("div");
    details.classList.add("detail_pane");
    // - title
    const d_title = document.createElement("h2");
    d_title.innerText = person_rec.name;
    details.appendChild(d_title);
    // - image
    const img_url = person_rec?.image??"";
    if (img_url)
    {
        const e_img = document.createElement("img");
        e_img.setAttribute("src", "images/" + img_url);
        e_img.setAttribute("width", "200");
        e_img.style.align = "center";
        details.appendChild(e_img);
    }
    // - bio
    const bio = document.createElement("p");
    bio.innerText = person_rec.biography;
    details.appendChild(bio);
    // - relationships
    const rels = document.createElement("ul");
    rels.innerHTML = rel_detail;
    details.appendChild(rels);
    //this.div.appendChild(details);
    document.body.appendChild(details);
  }

  clear_selection()
  {
    // remove all selections and highlights
    for (const elem of document.getElementsByClassName("person"))
    {
      elem.classList.remove("selected");
      elem.classList.remove("highlighted");
    }
    // remove detail pane
    for (const elem of document.getElementsByClassName("detail_pane"))
    {
      elem.parentElement.removeChild(elem);
    }
  }

  setup_selection()
  {
    const self = this;
    for (const elem of document.getElementsByClassName("person"))
    {
      elem.addEventListener("click", function(evt) {
        evt.stopPropagation();
        let el = evt.target;
        if (! el.classList.contains("person"))
          el = el.parentElement;
        const p_name = el.getAttribute("id").substr(2).replaceAll('_', ' ');
        self.set_selection(p_name);
        // click anywhere or press esc to clear selection (or scroll?)
        const controller = new AbortController();
        const do_close = function(e) {
          self.clear_selection();
          controller.abort();
        };
        // - click anywhere
        window.addEventListener("click", do_close, { signal: controller.signal });
        // - ESC key
        window.addEventListener("keydown", function(e) {
          if (e.key == 'Escape')
            do_close()
        }, { signal: controller.signal });
        // - scroll timeline
        //  NOT closing on scroll--it's nice to scroll to see the relationships
        //self.div.addEventListener("scroll", do_close, { signal: controller.signal });
        return false;
      });
    }
  }

  setup()
  {
    const ctl = document.getElementById("controls");
    if (! ctl)
      return;
    ctl.innerHTML = `
      Detail level: <input type="range" id="detail_level" min="0" max="5" value="2" step="1" list="detail_levels"/>
        <datalist id="detail_levels">
          <option value="0"></option>
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5"></option>
        </datalist>
        `;
    // support detail level control
    const lvl = document.getElementById("detail_level");
    lvl.value = this.max_detail_level;
    const self = this;
    lvl.addEventListener("input", function() {
      // redraw
      self.max_detail_level = parseInt(lvl.value);
      self.draw();
    });
  }

  draw()
  {
    // erase
    this.div.innerText = "";
    // draw
    this.draw_years();
    this.draw_people();
    this.draw_events();
    this.setup_selection();
  }

}

/*  TODOs
 *
 *    edit all AI-generated bios
 *    filter buttons, i.e. for heretics, apostles, writers, martyrs, ...
 *    try different timelines:
 *      iconoclasm
 *      roman divergence, west in perspective
 */