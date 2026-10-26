(function(){
  var query = [
    {t:'kw', text:'SELECT '}, {t:'', text:'career_path\n'},
    {t:'kw', text:'FROM '}, {t:'', text:'enterprise_systems\n'},
    {t:'kw', text:'WHERE '}, {t:'', text:'experience '}, {t:'kw', text:'>= '}, {t:'str', text:"'10 years'"}, {t:'', text:'\n'},
    {t:'kw', text:'  AND '}, {t:'', text:'destination '}, {t:'kw', text:'= '}, {t:'str', text:"'full_stack_and_data'"}, {t:'', text:';'}
  ];
  var target = document.getElementById('typed-query');
  var cursor = document.getElementById('cursor');
  var result = document.getElementById('result');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(reduced){
    var html = '';
    query.forEach(function(seg){
      if(seg.t) html += '<span class="'+seg.t+'">'+seg.text+'</span>';
      else html += seg.text;
    });
    target.innerHTML = html;
    result.classList.add('show');
    cursor.style.display='none';
    return;
  }

  var flat = [];
  query.forEach(function(seg){
    for(var i=0;i<seg.text.length;i++){ flat.push({ch:seg.text[i], cls:seg.t}); }
  });

  var i = 0;
  var buffer = '';
  var currentCls = '';
  function step(){
    if(i >= flat.length){
      setTimeout(function(){ result.classList.add('show'); }, 300);
      return;
    }
    var c = flat[i];
    if(c.cls !== currentCls){
      buffer += (currentCls ? '</span>' : '') + (c.cls ? '<span class="'+c.cls+'">' : '');
      currentCls = c.cls;
    }
    buffer += (c.ch === '\n' ? '<br>' : c.ch);
    target.innerHTML = buffer + (currentCls ? '</span>' : '');
    i++;
    setTimeout(step, 22);
  }
  step();
})();
