const trDictionaries = {
  name: "Türkçe",
  home: "Anasayfa",
  aboutMe: "Hakkımda",
  projects: "Projelerim",
  links: "Linkler",
  contactMe: "İletişim",
  shortestName: "tr",
  aboutMeTitle: "Şükrü Tanrıverdi'nin Macera Günlüğü",
  characterInfo: "Karakter Bilgileri",
  next: "Sonraki",
  previous: "Önceki",
  githubRepos: "Github Repoları",
  npmPackages: "Npm Paketleri",
  placeHolderName: "Adınız",
  placeHolderLastName: "Soyadınız",
  placeHolderEmail: "E-posta Adresiniz",
  placeHolderMessage: "Mesajınız",
  sendMessage: "Mesaj Gönder",
  pageNotFound: "Sayfa Bulunamadı",
  goBackHome: "Anasayfaya Dön",
  adventureEpisods: [
    {
      title: "Bölüm 1: İlk Adımlar",
      description:
        "Bir zamanlar Giresun'da, 6 Ocak 2003 tarihinde, maceraperest ruhlu bir karakter dünyaya geldi: Şükrü Tanrıverdi. Doğduğu bu küçük şehirde geçirdiği ilk yıllar, onu keşiflerle dolu bir dünyaya hazırladı. Karadeniz'in temiz havası ve doğasıyla büyüyen Şükrü, erken yaşlarda doğayla iç içe bir hayat sürerek cesaret ve merak dolu bir kişilik geliştirdi. Ancak asıl macera, İstanbul'un büyük ve hareketli sokaklarında başlayacaktı.",
    },

    {
      title: "Bölüm 2: Bilgeliğe Giden Yol",
      description:
        "İstanbul'a taşınan Şükrü, burada eğitim hayatına ilk adımını Orgeneral Eşref Bitlis İlkokulu'nda attı. Burada arkadaşları ve öğretmenleriyle geçirdiği yıllar, onun sosyalleşme ve öğrenme becerilerini geliştirdi. İlkokulun ardından, macerası Orgeneral Eşref Bitlis Ortaokulu'nda devam etti. Bu okullarda aldığı eğitim, onun bilgelik yolundaki ilk basamakları oldu. Matematik, fen ve sosyal bilimler gibi temel konularda edindiği bilgiler, onun analitik düşünme yeteneğini güçlendirdi.Lise yıllarında, EyüpSultan Mesleki ve Teknik Anadolu Lisesi'nin Web Tasarım Bölümü'ne girdi. Burada, sanal dünyaların kapılarını araladı ve web tasarımının büyülü dünyasında kendine yeni yollar keşfetti. HTML, CSS ve JavaScript gibi web teknolojilerini öğrenerek, kendi web sitelerini ve uygulamalarını geliştirmeye başladı. Lisede kazandığı bu beceriler, onun kariyer hedeflerini şekillendirdi ve teknoloji dünyasında kendine sağlam bir yer edinmesine yardımcı oldu.",
    },

    {
      title: "Bölüm 3: Üniversite Yılları",
      description:
        "Şükrü, İstanbul Kültür Üniversitesi Bilgisayar Programcılığı Bölümü'nde eğitimine devam ediyor. Bu bölümde, yazılım dünyasının derinliklerine dalarak, yeni yetenekler ve bilgi birikimi kazandı. Algoritmalar, veri yapıları ve yazılım mühendisliği gibi konularda derinlemesine eğitim alarak, karmaşık problemleri çözme yeteneğini geliştirdi. Üniversitedeki projeler ve staj deneyimleri, onun gerçek dünya yazılım geliştirme süreçlerini öğrenmesini sağladı.",
    },

    {
      title: "Bölüm 4: Efsanevi Yetenekler ve Güçler",
      description:
        "Şükrü, maceraları boyunca pek çok yetenek kazandı. TypeScript ve JavaScript gibi güçlü büyüleri kullanmayı öğrendi, ayrıca zaman zaman Python gibi farklı büyülerle de uğraştı. Bu büyülerle, kendi projelerini hayata geçirdi ve geliştirdi. En büyük eserlerinden biri olan express-ease, onun bu alandaki ustalığını gösteren bir hazine. Bu proje, express rest api uygulamalarını daha hızlı ve kolay bir şekilde oluşturmayı sağlayan bir araçtır ve pek çok geliştirici tarafından kullanılmaktadır.Frontend  teknolojilerinde uzmanlaşmış olan Şükrü, Reactjs ve Nextjs gibi modern çerçevelerle dinamik ve kullanıcı dostu arayüzler oluşturmayı öğrenmiştir. Vanilla Javascript bilgisi sayesinde, temel ve gelişmiş işlemleri etkin bir şekilde gerçekleştirebilmekte ve Tailwindcss ile stil yönetimini ustalıkla yapmaktadır. Arka yüz (backend) teknolojilerinde de güçlüdür; Expressjs ile sağlam ve esnek sunucu tarafı uygulamaları geliştirir, Socket.io ile gerçek zamanlı iletişim kurar, Prisma ile veri tabanı yönetimini optimize eder ve MongoDB ile büyük veri kümelerini yönetir.",
    },

    {
      title: "Bölüm 5: Kişisel Yetenekler ve İlgi Alanları",
      description:
        "Şükrü'nün hobileri arasında, futbol maçlarını izlemek, playstation oynamak, iskambil kağıtlarıyla büyülü oyunlar oynamak, dostlarıyla zaman geçirmek ve uzun araba seyahatlerine çıkmak yer alır. Bu aktiviteler, onun zihnini dinlendirir ve yeni maceralar için enerji toplamasını sağlar. Futbol maçlarını izlerken, takım ruhunu ve stratejik düşünmeyi öğrenir.",
    },

    {
      title: "Bölüm 6: Karakter ve Dil Yetileri",
      description:
        "Soğukkanlı ve mantıklı kişiliği sayesinde, karşılaştığı her zorluğun üstesinden gelmeyi başaran Şükrü, problemler karşısında yılmadan çözümler üretir. Bu yaklaşımı, ona her durumda sakin kalma ve en iyi çözümü bulma yeteneği kazandırmıştır. Anadil olarak Türkçe'yi konuşan bu maceracı, aynı zamanda İngilizce'de de ustalaşmış ve uluslararası arenada da kendini kanıtlamıştır. İngilizce dil bilgisi, onun global kaynaklardan faydalanmasını ve uluslararası projelerde yer almasını sağlar.",
    },

    {
      title: "Bölüm 7: Gelecekteki Maceralar",
      description:
        "Gelecekte, insanların hayatlarını kolaylaştıracak projeler geliştirmek isteyen Şükrü, internet girişimciliği yolunda ilerliyor. Şu anda üzerinde çalıştığı express-ease adlı projesi, bu hedefe doğru atılmış önemli bir adım. Şükrü, bu projeyle, geliştiricilerin işlerini kolaylaştırmayı ve daha hızlı, verimli uygulamalar oluşturmayı amaçlıyor.Ayrıca, gelecekte kendi internet girişimini kurarak, yenilikçi ve faydalı projelerle insanların günlük yaşamlarını daha da kolaylaştırmayı hedefliyor. Yeni teknolojiler ve trendleri takip ederek, sürekli olarak kendini güncelleyen Şükrü, bu yolda kararlı adımlarla ilerliyor.",
    },
  ],
};

export default trDictionaries;
