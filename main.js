const toggler = document.querySelector('.nav__menu');
const navList = document.querySelector('.nav__list--item');
const navMenu = document.querySelector('.nav__menu');
toggler.addEventListener('click', () => {
  navList.classList.toggle('toggler');
  navMenu.classList.toggle('colapse');
});

// let iden = ""
const tapsiService = [
  {
    id: 1,
    src: './assets/images/service/cc-classic.png',
    title: 'تپسی کلاسیک',
    text: 'با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.',
  },
  {
    id: 2,
    src: './assets/images/service/cc-motopeyk.png',
    title: 'موتوپیک',
    text: ' با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.',
  },
  {
    id: 3,
    src: './assets/images/service/cc-autopeyk.png',
    title: ' اتو پیک',
    text: 'اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.',
  },
  {
    id: 4,
    src: './assets/images/service/cc-plus.png',
    title: 'تپسی پلاس',
    text: ' در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.',
  },
  {
    id: 5,
    src: './assets/images/service/cc-tel.png',
    title: 'تپسی تلفنی',
    text: ' سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.',
  },

  {
    id: 7,
    src: './assets/images/service/cc-hamkhat.png',
    title: ' هم خط',
    text: ' سرویس هم‌خط تپسی شما را با مینی‌بوس‌ به مقصد می‌رساند. با استفاده از سرویس هم‌خط بعد از انتخاب مسیر سفر، بلیت‌تان را خریداری کنید و سریع‌تر و راحت‌تر به مقصد برسید. این سرویس خطی بسیار ارزان‌تر از دیگر سرویس‌های تپسی است و شما را سریع‌تر و راحت‌تر از حمل‌ونقل عمومی به مقصدتان می‌رساند. شما می‌توانید از قبل بلیت هم خط را رزرو کنید و با رعایت فاصله اجتماعی به مقصد برسید. سرویس مینی بوس آنلاین فعلا فقط در تهران فعال است.',
  },
  {
    id: 8,
    src: './assets/images/service/cc-taxi.png',
    title: ' تاکسی',
    text: 'در سرویس تاکسی تپسی، تاکسی‌های زرد یا سبز شما را به مقصدتان می‌رسانند. این سرویس در حال حاضر در تهران فعال است و چنانچه به دلایلی مانند ورود به محدوده طرح ترافیک یا طرح آلودگی هوا، ترجیح بدهید از تاکسی برای رفت‌وآمدتان استفاده کنید، گزینه مناسبی خواهد بود.',
  },
  {
    id: 9,
    src: './assets/images/service/cc-line.png',
    title: 'تپسی لاین',
    text: ' تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود. این سرویس در حال حاضر به دلیل شرایط همه‌گیری بیماری کرونا از دسترس خارج شده اما با بهبود شرایط می‌توانید از سرویس لاین استفاده کنید.',
  },
];
const features = document.querySelector('.features');
const navItem = document.querySelectorAll('.nav-item');
const myImg = document.getElementById('myImg');
const myTitle = document.getElementById('myTitle');
const myP = document.getElementById('myP');
navItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    let imgId = item.dataset.id;

    const finded = tapsiService.find((item) => {
      return item.id == imgId;
    });

    myImg.src = finded.src;
    myTitle.innerText = finded.title;
    myP.innerText = finded.text;
  });
});
document.addEventListener('DOMContentLoaded', () => {
  navItem[0].click();
});
