
const Users = [
  {
    id: 1,
    name: "Mustafa",
    surname: "Mustafa",
    email: "mustafa13mstf@gmail.com",
    password: "123",
    isActive: true,
    role: "admin",
    followers: 0,
    profilePicture: require('./images/a.jpg'),
    reviews: [
      {
        id: 1,
        foto: require("./images/monster.jpeg"),
        bgFoto: "",
        aciklama:
          "Monster bilgisayarım gerçekten harika! Hem oyun oynarken hem de video düzenlerken inanılmaz bir performans sunuyor. Hiçbir şekilde kasma ya da donma yaşamadım. Özellikle fan sistemi çok başarılı, uzun süre kullanımda bile ısınma sorunu yaşamıyorum. Tasarımı da oldukça şık ve RGB ışıklarıyla tam bir oyun atmosferi yaratıyor. Fiyatına göre sunduğu özellikler gerçekten tatmin edici. Eğer güçlü bir bilgisayar arıyorsanız, kesinlikle tavsiye ederim!",
        rating: 0,
        yorumlar: [
          {
            k_id: 1,
            k_foto: "",
            k_yorum:
              "Katılıyorum, Monster bilgisayarım sayesinde en yeni oyunları bile en yüksek ayarlarda oynayabiliyorum, performansı harika!",
          },
          {
            k_id: 2,
            k_foto: "",
            k_yorum:
              "Uzun süre çalışsam bile soğutma sistemi sayesinde asla ısınma problemi yaşamıyorum, çok memnunum.",
          },
          {
            k_id: 3,
            k_foto: "",
            k_yorum:
              "Tasarımı gerçekten çok şık ve dayanıklı, RGB ışıklar da tam bir oyun havası katıyor!",
          },
          {
            k_id: 3,
            k_foto: "",
            k_yorum:
              "Performansı genel olarak iyi olsa da, fan sesi oldukça rahatsız edici. Özellikle sessiz bir ortamda çalışırken dikkatim sürekli dağılıyor.",
          },
          {
            k_id: 1,
            k_foto: "",
            k_yorum:
              "Katılıyorum, Monster bilgisayarım sayesinde en yeni oyunları bile en yüksek ayarlarda oynayabiliyorum, performansı harika!",
          },
          {
            k_id: 2,
            k_foto: "",
            k_yorum:
              "Uzun süre çalışsam bile soğutma sistemi sayesinde asla ısınma problemi yaşamıyorum, çok memnunum.",
          },
          {
            k_id: 3,
            k_foto: "",
            k_yorum:
              "Tasarımı gerçekten çok şık ve dayanıklı, RGB ışıklar da tam bir oyun havası katıyor!",
          },
          {
            k_id: 3,
            k_foto: "",
            k_yorum:
              "Performansı genel olarak iyi olsa da, fan sesi oldukça rahatsız edici. Özellikle sessiz bir ortamda çalışırken dikkatim sürekli dağılıyor.",
          },
          {
            k_id: 1,
            k_foto: "",
            k_yorum:
              "Katılıyorum, Monster bilgisayarım sayesinde en yeni oyunları bile en yüksek ayarlarda oynayabiliyorum, performansı harika!",
          },
          {
            k_id: 2,
            k_foto: "",
            k_yorum:
              "Uzun süre çalışsam bile soğutma sistemi sayesinde asla ısınma problemi yaşamıyorum, çok memnunum.",
          },
          {
            k_id: 3,
            k_foto: "",
            k_yorum:
              "Tasarımı gerçekten çok şık ve dayanıklı, RGB ışıklar da tam bir oyun havası katıyor!",
          },
          {
            k_id: 3,
            k_foto: "",
            k_yorum:
              "Performansı genel olarak iyi olsa da, fan sesi oldukça rahatsız edici. Özellikle sessiz bir ortamda çalışırken dikkatim sürekli dağılıyor.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Emir",
    surname: "Yılmaz",
    email: "emiryilmaz@gmail.com",
    password: "123",
    isActive: false,
    role: "user",
    followers: 0,
    profilePicture:'',
    reviews: [
      {
        id: 3,
        foto: require("./images/sweatshirt.jpeg"),
        bgFoto: "",
        aciklama:
          "Bu gri sweatshirt tam bir rahatlık ve şıklık kombinasyonu! Kumaşı inanılmaz yumuşak ve kaliteli, gün boyu üzerimdeyken kendimi çok konforlu hissediyorum. Kesimi oldukça modern ve her türlü kombinle uyum sağlıyor. Hem spor yaparken hem de günlük kullanımda rahatlıkla giyilebiliyor. Ayrıca çok dayanıklı, defalarca yıkamama rağmen ne renginde solma ne de formunda bir değişiklik oldu. Dolabımın vazgeçilmez parçalarından biri haline geldi. Eğer hem sade hem de kullanışlı bir sweatshirt arıyorsanız, kesinlikle tavsiye ederim!",
        rating: 0,
        yorumlar: [
          {
            k_id: 1,
            k_foto: "",
            k_yorum: "Kumaşı inanılmaz yumuşak ve tüm gün rahatlık sağlıyor!",
          },
          {
            k_id: 2,
            k_foto: "",
            k_yorum:
              "Her türlü kombinle uyumlu, hem spor hem de günlük kullanım için ideal.",
          },
          {
            k_id: 3,
            k_foto: "",
            k_yorum:
              "Yıkandıktan sonra bile ne renginde ne de formunda bir değişiklik oluyor.",
          },
          {
            k_id: 3,
            k_foto: "",
            k_yorum:
              "Kumaşı yumuşak ama birkaç yıkamadan sonra dikişlerinde gevşeme oldu, kalite konusunda hayal kırıklığı yaşadım.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Ebru Nur",
    surname: "Tokatlı",
    email: "ebrunurtokatli@gmail.com",
    password: "123",
    isActive: false,
    role: "user",
    followers: 0,
    profilePicture:'',
    reviews: [
      {
        id: 2,
        foto: require("./images/s24.webp"),
        bgFoto: "",
        aciklama:
          "Samsung S24, şimdiye kadar kullandığım en iyi akıllı telefonlardan biri! Kamerası gerçekten inanılmaz; hem gündüz hem de gece çekimlerinde netlik ve detay mükemmel. Ekran kalitesi adeta bir televizyon izliyormuş gibi hissettiriyor, renkler çok canlı ve parlak. İşlemci performansı ise hız konusunda hiç taviz vermiyor, uygulamalar arasında geçiş son derece akıcı. Pil ömrü beni oldukça şaşırttı, yoğun kullanımda bile günü rahatça çıkarıyor. Ayrıca tasarımı hem şık hem de ele tam oturuyor. Eğer üst düzey bir telefon arıyorsanız, Samsung S24 kesinlikle beklentilerinizi karşılar!",
        rating: 0,
        yorumlar: [
          {
            k_id: 1,
            k_foto: "",
            k_yorum:
              "Telefonun özellikleri güzel ama pil ömrü beklentimin altında. Yoğun bir kullanımda günü tamamlayamıyorum.",
          },
          {
            k_id: 2,
            k_foto: "",
            k_yorum:
              "Kamera kalitesi profesyonel seviyede, gece çekimlerinde bile harika sonuçlar alıyorum.",
          },
          {
            k_id: 3,
            k_foto: "",
            k_yorum:
              "Performansı o kadar hızlı ki, hiçbir uygulama geçişinde bekleme yaşamıyorum.",
          },
          {
            k_id: 3,
            k_foto: "",
            k_yorum:
              "Pil ömrü çok uzun, yoğun kullanımda bile günü rahatlıkla çıkarıyorum.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Bünyamin",
    surname: "Kalkan",
    email: "bunyaminkalkan@gmail.com",
    password: "123",
    isActive: false,
    role: "user",
    followers: 0,
    profilePicture:'',
    reviews: [],
  },
  {
    id: 5,
    name: "Hilal",
    surname: "Dedek",
    email: "hilaldedek@gmail.com",
    password: "123",
    isActive: false,
    role: "user",
    followers: 0,
    reviews: [],
  },
];

export default Users;
