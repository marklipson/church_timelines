/**
 * DRAW TIMELINE
 */
class Timeline
{
  constructor(div_id, time_range, options)
  {
    options = options || {};
    this.div = document.getElementById(div_id);
    this.svg = null;
    this.time_range = time_range;
    this.time_step = options?.time_step??10;
    this.top_to_bottom = true;
    this.timeline_y = 10;                       // distance from edge
    this.slot_height = 27;                      // height plus spacing
    this.pix_per_year = options?.pix_per_year??8.5;
    this.max_detail_level = options?.max_detail_level??2; // show people/events up to this value
    this.max_title_preview = 80;
    this.detail_settings = options?.detail_settings??{};   // for each detail level, settings can be changed
    // fill in defaults
    for (let lvl=0; lvl < 7; lvl++)
    {
      if (! this.detail_settings?.[lvl])
        this.detail_settings[lvl] = {}
      if (! this.detail_settings[lvl]?.time_range)
        this.detail_settings[lvl].time_range = this.time_range;
      if (! this.detail_settings[lvl]?.pix_per_year)
        this.detail_settings[lvl].pix_per_year = this.pix_per_year;
      if (! this.detail_settings[lvl]?.slot_height)
        this.detail_settings[lvl].slot_height = this.slot_height;
    }
  }

  year_x(year)
  {
    return 24 + (year - this.time_range[0]) * this.pix_per_year;
  }

  slot_y(slot)
  {
    if (this.top_to_bottom)
      return 50 + slot * this.slot_height;
    else
      return 50 + slot * this.slot_height;
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
        let shortened_bio = person.biography;
        if (shortened_bio.length > this.max_title_preview)
          shortened_bio = shortened_bio.substr(0, this.max_title_preview) + "...  click to see more";
        el.setAttribute("title", person.name + ": " + shortened_bio)
        el.classList.add("person")
        for (const cat of person.category)
        {
          el.classList.add("cat_" + cat)
        }
        slot_end[use_slot] = death;
    }
  }

  find_box(name)
  {
    let el;
    if (/^e\d/.test(name))
      el = document.getElementById(name);
    else
      el = document.getElementById("p_" + name.replaceAll(' ', '_'));
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

  find_event_rec(id)
  {
    for (const rec of events)
    {
      if (rec.id == id)
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
    let id_no = 1;
    for (const event of events)
    {
        // ensure ID in record
        if (! event?.id)
        {
          event.id = "e" + id_no;
          id_no ++;
        }
        // don't render small details
        if (event.p > this.max_detail_level)
          continue;
        // draw
        let tr = event.time_range;
        const el = document.createElement("span");
        el.classList.add("event")
        el.setAttribute("id", event.id);
        let short_descr = event.description;
        if (short_descr.length > this.max_title_preview)
          short_descr = short_descr.substr(0, this.max_title_preview) + "... click to see more";
        el.setAttribute("title", event.name + ": " + short_descr)
        el.innerHTML = event.name;
        this.div.appendChild(el);
        const min_w = (parseFloat(window.getComputedStyle(el).fontSize) + 4)/this.pix_per_year;
        const underflow = min_w - (tr[1] - tr[0]);
        if (underflow > 0)
        {
          tr = [tr[0]-underflow/2, tr[1]+underflow/2];
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
  }

  set_selection(name)
  {
    // look up box, record
    const p_focus = this.find_box(name);
    if (! p_focus)
      return;
    const target_el = p_focus[0];
    const rec_type = target_el.classList.contains("person") ? "person": "event";
    const target_rec = (rec_type == "person") ? this.find_person_rec(name) : this.find_event_rec(name);
    // honor 'popup=false'
    if (target_rec?.popup === false)
      return;
    // clear prior selections
    this.clear_selection();
    // show as selected
    target_el.classList.add("selected");
    // highlight all relations
    let rel_detail = "";
    if (rec_type == "person")
    {
      for (const rel of relationships)
      {
        if (rel.from == name)
        {
          const p_to = this.find_person_rec(rel.to);
          this.find_box(rel.to).forEach(elem=>elem.classList.add("highlighted"));
          const rel_txt = relationship_text?.[rel.relationship]??(rel.relationship.replaceAll('_', ' ') + ':');
          if (p_to)
            rel_detail += `<li>${rel_txt} <b>${p_to.name}</b>. ${rel?.description??""}</li>`
        }
        if (rel.to == name)
        {
          const p_from = this.find_person_rec(rel.from);
          this.find_box(rel.from).forEach(elem=>elem.classList.add("highlighted"));
          const rel_inv = relationship_inverse?.[rel.relationship]??"related to";
          if (p_from)
            rel_detail += `<li>${rel_inv} <b>${p_from.name}</b>. ${rel?.description??""}</li>`
        }
      }
    }
    // show detail pane
    const details = document.createElement("div");
    details.classList.add("detail_pane");
    // - title
    const d_title = document.createElement("h2");
    d_title.innerHTML = target_rec.name;
    details.appendChild(d_title);
    // - time range (events)
    const tr = target_rec?.time_range;
    if (tr)
    {
        const e_tr = document.createElement("div");
        e_tr.classList.add("time_range");
        if (tr[1] == tr[0])
          e_tr.innerText = `${tr[0]} AD`;
        else
          e_tr.innerText = `${tr[0]}-${tr[1]} AD`;
        details.appendChild(e_tr);
    }
    // - image
    const img_url = target_rec?.image??"";
    if (img_url)
    {
        const e_img = document.createElement("img");
        e_img.setAttribute("src", "images/" + img_url);
        e_img.setAttribute("width", "200");
        e_img.style.align = "center";
        details.appendChild(e_img);
    }
    // - bio/description
    const bio = document.createElement("p");
    bio.innerHTML = target_rec?.biography || target_rec?.description || "";
    details.appendChild(bio);
    // - relationships
    if (rel_detail)
    {
      const rels = document.createElement("ul");
      rels.innerHTML = rel_detail;
      details.appendChild(rels);
    }
    document.body.appendChild(details);
  }

  clear_selection()
  {
    // remove all selections and highlights
    for (const cls of ["person", "event"])
      for (const elem of document.getElementsByClassName(cls))
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
    for (const cls of ["person", "event"])
    {
      for (const elem of document.getElementsByClassName(cls))
      {
        const e_cls = cls;
        elem.addEventListener("click", function(evt) {
          evt.stopPropagation();
          let el = evt.target;
          if (! el.classList.contains(e_cls))
            el = el.parentElement;
          let rec_id =  el.getAttribute("id");
          if (e_cls == "person")
            rec_id = rec_id.substr(2).replaceAll('_', ' ');
          self.set_selection(rec_id);
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
  }

  setup()
  {
    const ctl = document.getElementById("controls");
    if (! ctl)
      return;
    ctl.innerHTML = "";
    // draw detail selector
    ctl.innerHTML += `
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

  visible_time_range()
  {
    const first = this.time_range[0] + this.div.scrollLeft / this.pix_per_year;
    const range = this.div.clientWidth / this.pix_per_year;
    return [Math.max(first, this.time_range[0]), Math.min(first + range, this.time_range[1])];
  }

  draw()
  {
    const vis_range = this.visible_time_range();
    console.log(vis_range);
    // erase
    this.div.innerText = "";
    // find actual max detail and change control's max
    let p_max = 0;
    for (const arr of [people, events])
      for (const rec of arr)
        if (rec.p > p_max)
          p_max = rec.p;
    document.getElementById("detail_level").setAttribute("max", p_max)
    // apply detail-level settings
    const overrides = this.detail_settings[this.max_detail_level];
    for (const f in overrides)
      this[f] = overrides[f];
    // draw
    this.draw_years();
    this.draw_people();
    this.draw_events();
    this.setup_selection();
    // restore position
    this.scroll_to_year((vis_range[0] + vis_range[1])/2, "instant");
  }

  scroll_to_year(year, behavior)
  {
    const x = this.year_x(year) - this.div.clientWidth/2;
    this.div.scrollTo({
      left: x,
      behavior: behavior || "smooth"
    });
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