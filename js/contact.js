(function(){
  var c=document.getElementById('clock');
  function t(){ try{ c.textContent=new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'America/Mexico_City'})+' (GMT-6)'; }catch(e){} }
  t(); setInterval(t,30000);
  var b=document.getElementById('copy');
  b.addEventListener('click',function(){
    var m='rodrigomaya000@gmail.com';
    (navigator.clipboard?navigator.clipboard.writeText(m):Promise.reject()).then(function(){b.textContent='Copied ✓';},function(){location.href='mailto:'+m;});
    setTimeout(function(){b.textContent='Copy email';},2000);
  });
  fetch('assets/Rod_Maya_CV.pdf',{method:'HEAD'}).then(function(r){ if(r.ok) document.getElementById('cv').hidden=false; }).catch(function(){});
})();
