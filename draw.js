/**
 * DRAW TIMELINE
 */
class Timeline
{
  constructor(div_id, time_range)
  {
    this.div = document.getElementById(div_id);
    this.time_range = time_range;
    this.time_step = 10;
  }

  year_x(year)
  {
    return 16 + (year - this.time_range[0]) * 7;
  }

  draw_years()
  {
    for (let year=this.time_range[0]; year <= this.time_range[1]; year += this.time_step)
    {
        const el = document.createElement("span");
        this.div.appendChild(el);
        el.innerText = `${year}`;
        el.style.bottom = 10 + "px";
        el.style.left = this.year_x(year) + "px";
        el.classList.add("time_axis")
    }
  }

  draw_people()
  {
    let slot_end = [];
    for (const person of people)
    {
        //if (! core_figures.includes(person.name))
        //  continue;
        if (person.heretic)
          continue;
        const el = document.createElement("span");
        this.div.appendChild(el);
        el.innerText = person.name;
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
        el.style.bottom = (50 + use_slot * 23) + "px";
        el.style.left = this.year_x(birth) + "px";
        el.style.width = (this.year_x(death) - this.year_x(birth)) + "px";
        el.setAttribute("title", person.biography)
        el.classList.add("person")
        for (const cat of person.category)
        {
          el.classList.add("cat_" + cat)
        }
        slot_end[use_slot] = death;
    }
  }

  // A standard instance method
  draw()
  {
    this.draw_years();
    this.draw_people();
  }
}
