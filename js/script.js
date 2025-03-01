//
{
  let about_btn = document.querySelector('#About_btn');
  let about_banner = document.querySelector('#banner');

  about_btn.addEventListener('click', scrollFun);

  function scrollFun() {
    let banner = about_banner.getBoundingClientRect();
    window.scrollTo({
      top: banner.top + window.scrollY - 100,
      behavior: 'smooth',
    });
  }
}
{
  let service = document.querySelector('#service');
  let service_btn = document.querySelector('#service_btn');

  service_btn.addEventListener('click', serviceFun);

  function serviceFun() {
    let seevicemain = service.getBoundingClientRect();

    window.scrollTo({
      top: seevicemain.top + window.scrollY - 170,
      behavior: 'smooth',
    });
  }
}

{
  let work_btn = document.querySelector('#work_btn');
  let my_work = document.querySelector('#my_work');

  work_btn.addEventListener('click', work_fun);

  function work_fun() {
    let man_work = my_work.getBoundingClientRect();
    window.scrollTo({
      top: man_work.top + window.scrollY - 100,
      behavior: 'smooth',
    });
  }
}

{
  let Hireme_btn = document.querySelector('#Hireme_btn');
  let cta = document.querySelector('#cta');

  Hireme_btn.addEventListener('click', Hireme_btnFun);

  function Hireme_btnFun() {
    let main_cta = cta.getBoundingClientRect();
    window.scrollTo({
      top: main_cta.top + window.scrollY - 150,
      behavior: 'smooth',
    });
  }
}
