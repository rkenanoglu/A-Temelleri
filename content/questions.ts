import {weeks, type Question} from './course';
// Each row is an independently authored question; the first choice is the answer.
// The application rotates choices deterministically before rendering.
const banks = [
`Verinin anlamlandırılmış hâline ne denir?|Bilgi|Ortam|Gürültü|Konnektör
Bir bit kaç farklı değer alabilir?|2|8|16|256
Bir bayt kaç bittir?|8|2|4|16
Mesajı başlatan bileşen hangisidir?|Gönderici|Alıcı|Sonlandırıcı|Maske
Bir dosyayı teslim alan bilgisayar hangi roldedir?|Alıcı|Taşıyıcı|Protokol|Ortam
Ethernet kablosu iletişimin hangi bileşenidir?|İletim ortamı|Mesaj|Alıcı|Protokol
İletişimin ortak kurallarını ne belirler?|Protokol|Ekran boyutu|Dosya adı|Kablo rengi
Bir fotoğraf gönderiminde fotoğraf hangi bileşendir?|Mesaj|Kanal|Alıcı|Yönlendirici
Saniyedeki bit sayısının birimi hangisidir?|bps|Bayt|Metre|Volt
Verinin hedefe varması için geçen süre nedir?|Gecikme|Topoloji|Bayt|Maske
Bir ağ yazıcısını paylaşmanın temel yararı nedir?|Kaynakların ortak kullanımı|Her bilgisayara ayrı yazıcı gerekmesi|Tüm kabloların kaldırılması|Protokollerin gereksiz olması
0 ve 1 ile gösterim hangi kavrama örnektir?|İkili gösterim|Onluk kablolama|Analog süreklilik|Şehir ağı
Sürekli değişen büyüklük kullanan sinyal hangisidir?|Analog|Sayısal ayrık gösterim|IP maskesi|MAC tablosu
80 Mbps ideal hatta 10 MB veri kaç saniyede taşınır? Ek yük yoktur.|1|8|10|80
20 Mbps ideal hatta 5 MB veri kaç saniyede taşınır? Ek yük yoktur.|2|0,25|5|20
16 bit kaç bayttır?|2|4|8|16
Paketleme neye yardımcı olur?|Ortamın farklı iletişimlerce paylaşılmasına|Verinin anlamının silinmesine|Alıcının kaldırılmasına|Tüm gecikmenin yok olmasına
Aynı kabloya bağlı iki cihaz neden anlaşamayabilir?|İletişim kuralları uyumlu olmayabilir|Her kablo yalnız görüntü taşır|Ağda alıcı bulunamaz|Bitler yalnız kâğıtta tutulur
Gerçek aktarım hızı için hangisi doğrudur?|Protokol yükü ve koşullardan etkilenir|Her zaman hat kapasitesinin üstündedir|Yalnız dosya adına bağlıdır|Daima sıfırdır
Sınıf sıcaklığının 24 °C olarak yorumlanması neye örnektir?|Bağlam kazanmış bilgiye|Kablo topolojisine|MAC öğrenmeye|Port numarasına`,
`Bitlerin aynı hat üzerinde peş peşe gönderilmesi nedir?|Seri iletim|Paralel iletim|Broadcast|Yönlendirme
Sekiz bitin ayrı hatlarda aynı anda gönderilmesi nedir?|Paralel iletim|Seri iletim|DNS|Modülasyon
Asenkron seri iletimde karakter sınırına hangi bitler yardım eder?|Başlangıç ve dur|Ağ ve konak|Kaynak ve hedef MAC|Sadece IP
8N1 içindeki N ne demektir?|Eşlik biti yok|Dokuz veri biti|Ağ kapalı|Yeni IP
8N1 çerçevesi bir başlangıç bitiyle toplam kaç bit sürer?|10|8|9|11
Senkron iletimin temel özelliği nedir?|Zamanlama uyumu|Yalnız tek yön|Daima kablosuz oluşu|IP kullanmaması
Baud hangi büyüklüğü ölçer?|Saniyedeki sembol|Saniyedeki bayt|Kablo uzunluğu|Gecikme milisaniyesi
Her sembol 2 bit taşıyorsa 1000 baud kaç bps eder?|2000|500|1000|8000
Bakır kablo veriyi nasıl taşır?|Elektrik sinyalleriyle|Yalnız ışıkla|Ses dosyası olarak|Manyetik diskle
Fiber hangi taşıma biçimini kullanır?|Işık darbeleri|Bakırdaki akım|Basınç dalgası|Mekanik titreşim
Yoğun elektromanyetik girişimde hangi ortam avantajlıdır?|Fiber optik|Ekransız bakır|Hasarlı koaksiyel|Daha uzun bakır
UTP'deki çiftlerin bükülmesinin amacı nedir?|Girişimi azaltmaya yardım etmek|IP dağıtmak|Işığı yansıtmak|Kablosuz erişim vermek
Koaksiyelin temel yapısında ne vardır?|Merkez iletken ve ekran|Yalnız cam çekirdek|Sekiz bağımsız anten|Yalnız plastik lif
Wi-Fi veriyi hangi ortamla taşır?|Elektromanyetik dalgalar|Yalnız bakır|Yalnız fiber|Kâğıt şerit
Kablosuz kapsama hangi etkenden etkilenir?|Duvar ve mesafe|Yalnız dosya uzantısı|Kullanıcı adının uzunluğu|MAC gösterimindeki harfler
Erişim noktasının görevi nedir?|Kablosuz istemcileri ağa bağlamak|Her IP'yi şifrelemek|Elektriği depolamak|DNS kayıtlarını silmek
Hareket eden öğrenci için hangi erişim uygundur?|Kablosuz erişim|Sabit uçlu koaksiyel|Yalnız masaüstü NIC|Sonlandırıcı
Seri iletişimde iki taraf hangi konuda anlaşmalıdır?|Hız ve çerçeve biçimi|Masa rengi|Ekran çözünürlüğü|Dosya klasörü adı
Paralel iletim için hangi ifade doğrudur?|Birden fazla veri hattı kullanabilir|Her koşulda seriden hızlıdır|Yalnız fiberle yapılır|Bitleri mutlaka tek tek yollar
Ortam seçiminde hangi ölçüt grubu anlamlıdır?|Mesafe, maliyet, kapasite|Dosya adı, duvar rengi, masa|Kullanıcı adı, ikon, yazı tipi|Takvim, parola uzunluğu, saat dilimi`,
`Modem adı hangi işlemlerden gelir?|Modülasyon ve demodülasyon|Model ve bellek|Monitör ve demet|Mobil ve DNS
Bilgiyi taşıyıcıya işleme süreci nedir?|Modülasyon|Yönlendirme|Alt ağlama|Anahtarlama
Taşıyıcıdan bilgiyi geri elde etme nedir?|Demodülasyon|Adresleme|Kapsülleme|Kablolama
Yalnız tek yönde veri akışı hangi moddur?|Simplex|Half-duplex|Full-duplex|Senkron
İki yönlü ancak sırayla iletim hangi moddur?|Half-duplex|Simplex|Full-duplex|Paralel
Aynı anda iki yönlü iletim hangi moddur?|Full-duplex|Half-duplex|Simplex|Asenkron
Geleneksel radyo yayını hangi moda örnektir?|Simplex|Full-duplex|Half-duplex|Çift ağlı
Bas-konuş telsiz hangi moda örnektir?|Half-duplex|Full-duplex|Simplex|Paralel
İki kişinin aynı anda konuşabildiği telefon görüşmesi hangi moddur?|Full-duplex|Simplex|Half-duplex|Asenkron tek yön
ADSL'deki asimetri neyi anlatır?|İndirme ve yükleme kapasitelerinin farklılığını|Yalnız tek yönde iletimi|Yalnız kablosuz erişimi|IP adresinin olmamasını
100 Mbps indirme ve 10 Mbps yükleme hangi erişimdir?|Asimetrik|Mutlaka simplex|Mutlaka paralel|Adreslemesiz
DSL erişimin performansını ne etkileyebilir?|Hat kalitesi ve uzaklık|Yalnız tarayıcı teması|Klasör adı|Monitör boyutu
Router'ın temel görevi hangisidir?|Ağlar arasında paket yönlendirmek|Taşıyıcıdan veriyi her durumda çözmek|Işık kaynağı olmak|Dosyaları yazdırmak
Ev cihazı modem ve router işlevini nasıl sunabilir?|İkisini aynı kutuda birleştirerek|MAC adresini kaldırarak|Yalnız anten rengiyle|Veriyi bayt kullanmadan göndererek
Seri iletim ile full-duplex ilişkisi için hangisi doğrudur?|Birlikte kullanılabilirler|Birbirini dışlarlar|Aynı kavramdırlar|İkisi de kablo türüdür
Senkron/asenkron ayrımı neyle ilgilidir?|Zamanlama|Sadece iletişim yönü|Adres sınıfı|Coğrafi kapsam
Klasik çevirmeli modem ile DSL için hangisi doğrudur?|Farklı erişim teknolojileridir|Tamamen aynı teknolojidir|İkisi de yalnız fiber kullanır|İkisinde de alıcı yoktur
Hat kapasitesinin 50 Mbps olması neyi garanti etmez?|Her dosyanın sürekli 50 Mbps ile inmesini|Bit hızı ölçülebilmesini|Veri taşınabilmesini|Bir alıcı bulunmasını
İki taraf da gönderebiliyor fakat aynı anda gönderemiyorsa ne söylenir?|Half-duplex çalışıyorlar|Simplex çalışıyorlar|Mutlaka fiber kullanıyorlar|IP kullanamazlar
Modem ile switch arasındaki temel fark nedir?|Modem sinyal dönüşümü, switch yerel çerçeve iletimi yapar|İkisi de yalnız yazıcı paylaşır|Switch modülasyon yapmak zorundadır|Modem her zaman MAC tablosuyla karar verir`,
`Bir öğrencinin telefon-kulaklık bağlantısı kapsam açısından hangisidir?|PAN|WAN|MAN|İntranet
Bir bilgisayar laboratuvarı hangi kapsamın örneğidir?|LAN|WAN|MAN|Extranet
Şehir ölçeğinde ağ hangi adla anılır?|MAN|PAN|Tek bir port|Simplex
Farklı ülkelerdeki şubeleri bağlayan ağ hangisidir?|WAN|PAN|Tek bir LAN kablosu|Eşlik biti
Kablosuz yerel alan ağı kısaltması hangisidir?|WLAN|WAN|MAN|NIC
Hizmet isteyen yazılım hangi roldedir?|İstemci|Sunucu|Tekrarlayıcı|Taşıyıcı
Web sayfasını sağlayan uygulama hangi roldedir?|Sunucu|Yalnız istemci|Sonlandırıcı|Fiber
Doğrudan kaynak paylaşan eşit roller hangi yapıya uygundur?|Eşler arası|Yalnız merkezi sunucu|Simplex|Modülasyon
Merkezi hesap yönetimi için hangi yaklaşım uygundur?|İstemci/sunucu|Yalnız fiziksel halka|Yalnız koaksiyel yol|Simplex radyo
Kurum içi erişime yönelik ağ hizmeti nedir?|İntranet|İnternetin tamamı|Kişisel PAN|Tam örgü
Belirli dış paydaşlara kontrollü açılan yapı nedir?|Extranet|Sadece intranet|Başlangıç biti|Half-duplex
Küresel ağlar bütünü hangisidir?|İnternet|Tek LAN|Tek NIC|Sonlandırıcı
Bir cihaz hem istemci hem sunucu olabilir mi?|Evet, farklı hizmetlerde olabilir|Hayır, donanım buna izin vermez|Yalnız MAC adresi yoksa|Yalnız fiber kullanırsa
VPN en iyi nasıl tanımlanır?|Mevcut ağ üstünde mantıksal özel bağlantı|Kesin 10 metrelik fiziksel ağ|Bir kablo konnektörü|Her zaman halka topolojisi
Ağ tasarımında hangi ölçüt önemlidir?|Kullanıcı sayısı ve ölçeklenebilirlik|Yalnız duvar rengi|Yalnız bilgisayar markası|Yalnız masa boyu
Yüzlerce kullanıcı için merkezi yönetim ne sağlar?|Hizmet ve hesapların ortak yönetimini|Tüm güvenlik ihtiyacının bitmesini|Hiç ağ trafiği oluşmamasını|Kabloların zorunlu kalkmasını
İki arkadaşın doğrudan dosya paylaşması neye uygundur?|Eşler arası yapı|Mutlaka küresel WAN|Yalnız MAN|Taşıyıcı modülasyonu
LAN ve yıldız hangi iki ayrı özelliği anlatır?|Kapsam ve topoloji|İkisi de hız birimi|İkisi de IP sınıfı|İkisi de parola türü
Ağ türlerini ayırırken kesin kilometre kuralı yerine ne değerlendirilir?|Kapsam ve işletim|Yalnız dosya adı|Yalnız MAC uzunluğu|Ekran parlaklığı
Üniversitenin sadece personeline açılan belge sistemi hangisine örnektir?|İntranet|Açık küresel internetin tamamı|PAN kulaklık ağı|Simplex radyo`,
`Cihazların kabloyla nasıl bağlandığını ne gösterir?|Fiziksel topoloji|IP sınıfı|Uygulama portu|Eşlik biti
Verinin ağda izlediği akışı ne anlatır?|Mantıksal topoloji|Kablo rengi|Sunucu kasası|Konnektör boyu
Her uç merkezi switche ayrı bağlıysa topoloji nedir?|Yıldız|Yol|Halka|Tam örgü
Yıldızda tek uç kablosu koparsa genelde ne olur?|Yalnız o uç etkilenir|Tüm internet kapanır|Tüm düğümler silinir|Merkez otomatik yanar
Yıldızda merkezi cihaz arızalanırsa ne olur?|O merkeze bağlı uçların iletişimi etkilenir|Sadece tek rastgele dosya etkilenir|Hiçbir şey değişmez|Ağ otomatik tam örgü olur
Ortak omurga kullanılan klasik topoloji nedir?|Yol|Yıldız|Tam örgü|Ağaçtaki her dal
Klasik koaksiyel yol uçlarında ne kullanılır?|Sonlandırıcı|DNS sunucusu|Wi-Fi anteni|Ağ maskesi
Sonlandırıcının görevi nedir?|Sinyal yansımalarını önlemeye yardım etmek|IP vermek|MAC öğrenmek|Parola üretmek
Düğümler çevrim oluşturuyorsa topoloji nedir?|Halka|Yol|Yıldız|PAN
Basit ve yedeksiz halkada bir kopma ne yapabilir?|İletişimi kesebilir|Hiçbir koşulda etkilemez|Tüm portları hızlandırır|Ağı kablosuz yapar
Her düğüm diğer tüm düğümlere bağlıysa yapı nedir?|Tam örgü|Yıldız|Yol|Tek halka
4 düğümlü tam örgü kaç bağlantı ister?|6|4|8|12
5 düğümlü tam örgü kaç bağlantı ister?|10|5|15|20
6 düğümlü tam örgü kaç bağlantı ister?|15|6|12|30
Tam örgüde bağlantı sayısı formülü hangisidir?|n(n−1)/2|n+1|2n+1|n/2
Birden fazla yıldızın hiyerarşik birleşimi neye benzer?|Ağaç|Tek yol|Tek halka|Simplex
Yedekliliğin temel kazancı nedir?|Alternatif iletişim yolları|Her zaman daha az kablo|Hiç yönetim gerekmemesi|Sıfır maliyet
Örgü topolojinin olası maliyeti nedir?|Daha fazla bağlantı ve yönetim karmaşıklığı|Daima tek kablo kullanılması|Hiç port gerekmemesi|Adres ihtiyacının bitmesi
Hub merkezli fiziksel yıldız için hangisi doğrudur?|Mantıksal olarak ortak ortam paylaşılabilir|Her çerçeve kesin tek hedef porta gider|Fiziksel olarak halka olmak zorundadır|MAC tablosu mutlaka vardır
Bir laboratuvarda yeni uç eklemek için merkeze kablo çekiliyorsa hangi tasarım uygundur?|Yıldız|Klasik koaksiyel yol|Yedeksiz halka|Tam örgünün tüm bağlantıları`,
`OSI kaç katmandan oluşur?|7|4|5|8
OSI en iyi nasıl tanımlanır?|Başvuru modeli|Tek bir ağ cihazı|Bir IP adresi|Kablo standardı
En alt OSI katmanı hangisidir?|Fiziksel|Uygulama|Taşıma|Sunum
En üst OSI katmanı hangisidir?|Uygulama|Ağ|Oturum|Veri bağlantı
MAC adresleme hangi katmanda ele alınır?|Veri bağlantı|Sunum|Oturum|Uygulama
IP yönlendirme hangi katmandadır?|Ağ|Fiziksel|Sunum|Oturum
TCP ve UDP hangi katmanda ele alınır?|Taşıma|Fiziksel|Sunum|Veri bağlantı
Elektrik ve optik sinyaller hangi katmanın konusudur?|Fiziksel|Uygulama|Oturum|Taşıma
Oturum yönetimi kavramsal olarak hangi katmandadır?|Oturum|Fiziksel|Ağ|Veri bağlantı
Verinin gösterim biçimi hangi üst katmanla ilişkilidir?|Sunum|Fiziksel|Ağ|Veri bağlantı
Ethernet'in veri bağlantı birimi hangisidir?|Çerçeve|IP paketi|TCP segmenti|Dosya klasörü
IP'nin veri birimi hangisidir?|Paket|Ethernet çerçevesi|TCP segmenti|Işık kablosu
TCP taşıma birimi hangisidir?|Segment|Ethernet çerçevesi|Kablo|MAC tablosu
Fiziksel düzeyde hangi gösterim kullanılır?|Bitler ve sinyaller|Yalnız web adresleri|Yalnız klasörler|Yalnız port adları
Alt katman kontrol bilgisinin eklenmesi nedir?|Kapsülleme|Alt ağlama|Şifre sıfırlama|Topoloji çizimi
Alıcıda ilgili başlıkların işlenip çıkarılması neye karşılık gelir?|Kapsülün açılması|Modem satın alınması|Yeni kablo üretimi|Yeni IP sınıfı
Kopuk kabloyu önce hangi katmanda incelersin?|Fiziksel|Sunum|Oturum|Uygulama
Port numaraları temel olarak neyi ayırt etmeye yardım eder?|Uygulama süreçlerini|Kablo rengini|Şehirleri|Fiber çekirdeğini
Alttan üste doğru sıra hangisidir?|Fiziksel → Veri bağlantı → Ağ → Taşıma|Ağ → Fiziksel → Taşıma → Veri bağlantı|Taşıma → Sunum → Fiziksel → Ağ|Uygulama → Ağ → Fiziksel → Oturum
Katmanlı yaklaşım sorun gidermeye nasıl yardım eder?|Sorumlulukları ayrı incelemeyi sağlar|Her hatayı kablo hatası sayar|Adreslemeyi kaldırır|Protokolleri gereksiz yapar`,
`UTP neyi ifade eder?|Ekransız bükümlü çift|Tek modlu fiber|Ekranlı koaksiyel|Kablosuz protokol
STP kabloyu UTP'den ayıran temel özellik nedir?|Ekranlama|IP yönlendirme|Yalnız ışık iletme|Sadece iki cihaz destekleme
Yaygın dört çiftli Ethernet kablosunda kaç iletken vardır?|8|2|4|16
Yaygın Ethernet bakır konnektörü hangi adla bilinir?|RJ-45/8P8C|HDMI|SC fiber ucu|VGA
T568A ve T568B neyi düzenler?|İletkenlerin pin sırasını|IP sınıflarını|DNS kayıtlarını|Port numaralarını
İki uç da T568B ise klasik kablo türü nedir?|Düz|Çapraz|Koaksiyel|Tek modlu
Bir uç T568A diğer uç T568B ise klasik tür nedir?|Çapraz|Düz|Fiber|Kablosuz
Auto-MDI/MDIX neye yardım eder?|Bağlantı türüne otomatik uyuma|IP sınıfını bulmaya|Dosya şifrelemeye|Işık üretmeye
T568B'de ilk pin rengi hangisidir?|Beyaz-turuncu|Mavi|Kahverengi|Beyaz-kahverengi
T568B'de ikinci pin rengi hangisidir?|Turuncu|Yeşil|Beyaz-mavi|Kahverengi
Kablo test cihazı neyi kontrol edebilir?|Süreklilik ve pin eşleşmesini|Öğrenci notunu|DNS alan adının sahibini|Tüm uygulama güvenliğini
Fiber ortamında veri hangi biçimde ilerler?|Işık darbeleri|Bakır akımı|Basınç|Mekanik darbe
Fiberin EMI karşısındaki özelliği nedir?|Elektromanyetik girişimden etkilenmez|Bakırdan daima daha çok etkilenir|Yalnız kısa mesafede çalışır|IP adresi bozulur
Tek modlu ve çok modlu neyin türleridir?|Fiberin|IP portunun|MAC tablosunun|DNS isteğinin
NIC'nin temel görevi nedir?|Cihazı ağa bağlamak|Her paketi internetten indirmek|Tüm parolaları tutmak|Ağların tümünü yönlendirmek
Yaygın Ethernet MAC adresi kaç bittir?|48|32|64|128
Hangisi MAC adresi gösterimidir?|00:1A:2B:3C:4D:5E|192.168.1.10|255.255.255.0|https://ders.example
MAC adresiyle ilgili hangisi doğrudur?|Yazılımla değiştirilebilir|Asla değiştirilemez|Her zaman 32 bittir|DNS tarafından zorunlu atanır
Fiber bağlantı kapasitesi neye bağlıdır?|Fiber, optik modül ve standardın birlikte seçimine|Sadece dış kılıf rengine|Sadece kullanıcı adına|Sadece DNS sunucusuna
Bir NIC hangi arabirim biçiminde bulunabilir?|Ethernet veya Wi-Fi|Yalnız koaksiyel|Yalnız yazıcı portu|Yalnız fiber omurga`,
`Tekrarlayıcı hangi OSI düzeyindedir?|Fiziksel|Ağ|Taşıma|Uygulama
Hub hangi cihaza benzer?|Çok portlu tekrarlayıcı|IP yönlendirici|DNS sunucusu|Güvenlik yazılımı
Hub gelen sinyali genelde ne yapar?|Diğer portlara tekrarlar|Sadece MAC tablosundaki porta yollar|IP maskesiyle filtreler|Web sayfasına çevirir
Klasik hub ağının çarpışma alanı nasıldır?|Ortak|Her port tamamen ayrı|Hiçbir koşulda bulunmaz|Sadece DNS'e bağlı
Katman 2 switch neyle karar verir?|MAC adresi|Dosya adı|Kablo rengi|Tarayıcı sürümü
Switch tablosunu hangi adresten öğrenir?|Kaynak MAC|Hedef IP|Kaynak DNS adı|Hedef port numarası
Switch kaynak MAC'i neyle eşleştirir?|Giriş portu|Ekran çözünürlüğü|Dosya boyutu|Parola
Bilinen tekil hedefe çerçeve nasıl iletilir?|Uygun hedef portuna|Her zaman tüm portlara|Yalnız DNS'e|Daima çöpe
Bilinmeyen tekil hedef için switch ne yapabilir?|İlgili VLAN'da uygun portlara yayar|Her zaman çerçeveyi siler|IP üretir|Tüm MAC adreslerini değiştirir
Yayma sırasında giriş portu için ne geçerlidir?|Normalde geri gönderilmez|Mutlaka yalnız ona gönderilir|IP atanır|Port kablosuz olur
Broadcast çerçevesi hangi kapsamda yayılır?|İlgili VLAN içinde|İnternetteki her cihaza|Yalnız kaynak porta|Yalnız tek DNS'e
Switch her çerçeveyi tek porta gönderir iddiası nasıldır?|Yanlıştır; broadcast ve bilinmeyen hedef istisnadır|Her zaman doğrudur|Sadece hub için doğrudur|IP sınıfına bağlıdır
Full-duplex Ethernet'te klasik çarpışmalar için hangisi doğrudur?|Görülmez|Her saniye zorunludur|Sadece MAC sıfırsa görülür|Her zaman hub ile aynıdır
Switch portları çarpışma alanını nasıl etkiler?|Ayrı bağlantılar sağlar|Tüm portları tek ortak alana zorlar|Adreslemeyi kaldırır|Ağ hızını sıfırlar
Aynı VLAN içindeki katman 2 switch broadcast alanını tek başına böler mi?|Hayır|Her portta mutlaka böler|Yalnız kablo kısa ise|Yalnız port 1'de
Broadcast alanlarını ayırmak için hangi yaklaşım kullanılabilir?|VLAN ve yönlendirme sınırları|Yalnız kablo rengi değiştirmek|Hub sayısını artırmak|Dosyayı küçültmek
A port 3'ten çerçeve yollarsa switch ne öğrenir?|A'nın MAC'i port 3'tedir|Hedef mutlaka port 3'tedir|A'nın IP sınıfı C'dir|A bir DNS sunucusudur
Switch açıldıktan hemen sonra bilinmeyen hedefin yayılması neden normaldir?|Tablo henüz öğrenilmemiş olabilir|Kablo kesin kopuktur|IP kesin yanlıştır|Cihaz modemdir
Tekrarlayıcının yaptığı temel işlem nedir?|Sinyali yeniden üretmek|IP yolunu seçmek|TCP oturumu açmak|Alan adı çözmek
Hub yerine switch kullanmanın önemli yararı nedir?|Hedefe göre çerçeve iletimi ve ayrı bağlantılar|Her tehditten kesin koruma|IP adresinin gereksiz olması|Tüm kabloların kalkması`,
`Köprü hangi katmanda çalışır?|Veri bağlantı|Fiziksel|Taşıma|Uygulama
Köprü hangi adresle filtreleme yapar?|MAC|Alan adı|TCP portu|Posta adresi
Switch hangi yaklaşımın çok portlu gelişimi sayılabilir?|Köprü|Modem|DNS|Tek yönlü radyo
Yönlendirici hangi katmanda ele alınır?|Ağ|Sunum|Oturum|Fiziksel
Router iletim kararında temel olarak hangi hedefi kullanır?|Hedef IP|Hedef dosya adı|Hedef uygulama rengi|Hedef parola
Yönlendirme tablosunda hangisi yer alabilir?|Hedef ağ ve sonraki atlama|Öğrenci numarası|Ekran çözünürlüğü|Kablo rengi
Birden fazla rota eşleşirse temel tercih nedir?|En uzun önek eşleşmesi|En kısa önek her zaman|En büyük dosya|En küçük MAC her zaman
/24 ve /16 rotaları aynı hedefle eşleşirse hangisi daha özeldir?|/24|/16|İkisi de aynı|Hiçbiri
Uzak ağ için özel rota yoksa istemci neyi kullanabilir?|Varsayılan ağ geçidi|Kendi broadcast adresini sunucu olarak|Yalnız fiziksel sonlandırıcıyı|Kendi dosya adını
İstemci hedefin yerel olup olmadığını neyle değerlendirir?|IP adresi ve maske|Yalnız kablo rengi|Yalnız port sayısı|Kullanıcı adı
192.168.1.20/24 ile hangi adres aynı alt ağdadır?|192.168.1.30|192.168.2.30|10.0.0.30|172.16.1.30
192.168.1.20/24 için hangisi uzak hedeftir?|192.168.2.30|192.168.1.30|192.168.1.40|192.168.1.50
Varsayılan ağ geçidinin yerel arabirimi normalde nerededir?|İstemciyle aynı alt ağda|Mutlaka başka ülkede|Mutlaka loopback'te|DNS adının içinde
Router yerel broadcast'i varsayılan olarak ne yapar?|Başka alt ağa olduğu gibi iletmez|Tüm internete yayar|TCP'ye çevirir|Kabloya kaydeder
IPv4 TTL her router geçişinde ne olur?|Azalır|Artar|Daima 128 olur|MAC'e dönüşür
TTL sıfıra indiğinde ne olur?|Paket düşürülür|Paket sonsuza dek dolaşır|IP sınıfı değişir|Paket herkese kopyalanır
TTL'nin amaçlarından biri nedir?|Sonsuz dolaşmayı sınırlamak|DNS adı üretmek|Kablo uzunluğunu ölçmek|Parola saklamak
NAT nedir?|Adres çevirisi|Kablo uçlandırma|Çerçeve uzunluğu|Işık modülü
NAT ve yönlendirme için hangisi doğrudur?|Farklı işlevlerdir|Tamamen aynı işlemdir|İkisi de yalnız katman 1'dedir|İkisi de DNS kaydıdır
Farklı iki IP alt ağı arasında yol seçmek hangi iştir?|Yönlendirme|Yalnız tekrarlama|Kablo bükme|Koaksiyel sonlandırma`,
`Bu derste TCP/IP kaç katmanla ele alınır?|4|7|2|9
TCP/IP neden yalnız TCP ve IP'den ibaret değildir?|Bir protokol ailesidir|Yalnız bir kablodur|Bir işletim sistemidir|Bir konnektördür
HTTP hangi TCP/IP katmanındadır?|Uygulama|Taşıma|İnternet|Ağ erişim
TCP hangi TCP/IP katmanındadır?|Taşıma|Uygulama|İnternet|Ağ erişim
IP hangi TCP/IP katmanındadır?|İnternet|Taşıma|Uygulama|Yalnız fiziksel
Ethernet hangi TCP/IP düzeyinde ele alınır?|Ağ erişim|Uygulama|Taşıma|Sunum
TCP'nin sunduğu mekanizmalardan biri nedir?|Sıralama ve yeniden iletim|IP adresi dağıtımı|Kablo ekranlama|Alan adı kaydı
UDP kendi başına neyi garanti etmez?|Teslim ve sıralamayı|Datagram kullanmayı|Port numarası bulunmasını|Taşıma katmanında incelenmeyi
UDP'nin temel çalışma biçimi nedir?|Bağlantısız datagram|Zorunlu TCP oturumu|Fiber modülasyonu|MAC öğrenme
Bir uygulama UDP üstüne güvenilirlik ekleyebilir mi?|Evet, uygulama mekanizmalarıyla|Hayır, hiçbir biçimde|Sadece kabloyu kısaltarak|Sadece IP'yi silerek
IP tek başına ne sunmaz?|Teslim garantisi|Mantıksal adresleme|Paket iletimi için yapı|Ağlar arası iletişime katkı
Port numarası neyi ayırt etmeye yardım eder?|Uygulama sürecini|Kablo kategorisini|Şehri|Fiber tipini
HTTPS için yaygın hedef port hangisidir?|443|25|110|21
DNS'nin görevi nedir?|Alan adlarını IP gibi kayıtlarla ilişkilendirmek|Kabloya pin sırası vermek|Her paketi şifrelemek|Her cihazı full-duplex yapmak
DHCP ne sağlayabilir?|IP ve ağ yapılandırması|Fiziksel kablo onarımı|Kesin saldırı koruması|Ekran görüntüsü
DNS ile DHCP için hangisi doğrudur?|Farklı görevler yaparlar|Tamamen aynı hizmettirler|İkisi de konnektördür|İkisi de yalnız analogdur
ICMP hangi işle ilişkilidir?|Ağ denetim mesajları|Kablo üretimi|Kullanıcı arayüzü|Yazıcı mürekkebi
Uygulama → taşıma → internet → ağ erişim sırasına hangisi örnektir?|HTTP → TCP → IP → Ethernet|IP → HTTP → Ethernet → TCP|TCP → IP → HTTP → Ethernet|Ethernet → IP → HTTP → TCP
Bazı kaynakların TCP/IP'yi beş katmanla vermesinin nedeni nedir?|Ağ erişimini iki düzeyde ele almaları|TCP'nin beş adresi olması|IP'nin beş bayt olması|DNS'nin beş port istemesi
Dosyanın sıralı ve eksiksiz aktarımına hangi taşıma mekanizması yardım eder?|TCP'nin sıralama ve yeniden iletimi|Yalnız UDP'nin teslim garantisi|Yalnız kablo rengi|Yalnız DNS adı`,
`IPv4 adresi kaç bittir?|32|48|64|128
IPv4 kaç sekizliyle yazılır?|4|2|6|8
Bir IPv4 sekizlisi hangi aralıktadır?|0–255|0–999|1–1024|0–65535
/24 kaç ağ biti belirtir?|24|8|32|16
/24 maskesi hangisidir?|255.255.255.0|255.0.0.0|255.255.0.0|0.0.0.0
192.168.10.25/24 ağ adresi hangisidir?|192.168.10.0|192.168.10.25|192.168.0.25|192.168.10.255
192.168.10.25/24 broadcast adresi hangisidir?|192.168.10.255|192.168.10.0|192.168.10.1|192.168.255.25
Tarihsel A sınıfının varsayılan öneki hangisidir?|/8|/16|/24|/32
Tarihsel B sınıfının olağan ilk sekizli aralığı hangisidir?|128–191|1–126|192–223|224–239
Tarihsel C sınıfının varsayılan öneki hangisidir?|/24|/8|/16|/4
Güncel adres hesaplarında ne esas alınmalıdır?|Verilen CIDR öneki|Yalnız tarihsel sınıf|Yalnız son sekizli|MAC adresi
Hangisi özel IPv4 adresidir?|10.1.2.3|8.8.8.8|172.40.1.1|1.1.1.1
Hangisi 172.16.0.0/12 özel bloğundadır?|172.20.1.1|172.40.1.1|172.32.1.1|172.10.1.1
Yaygın loopback adresi hangisidir?|127.0.0.1|192.168.1.255|10.0.0.255|255.255.255.255
Klasik /26 alt ağında kaç kullanılabilir konak adresi vardır?|62|64|30|254
/26 alt ağında toplam kaç adres vardır?|64|62|32|256
192.168.1.70/26 hangi ağa aittir?|192.168.1.64|192.168.1.0|192.168.1.128|192.168.1.192
192.168.1.64/26 broadcast adresi hangisidir?|192.168.1.127|192.168.1.64|192.168.1.126|192.168.1.255
IPv6 adresi kaç bittir?|128|32|48|64
IPv6'da broadcast için hangisi doğrudur?|IPv4 türü broadcast kullanılmaz|Her paket broadcast olmak zorundadır|Yalnız /24'te vardır|Yalnız DNS broadcast'tir`,
`Yetkisiz okumayı önleme hangi hedeftir?|Gizlilik|Bütünlük|Erişilebilirlik|Topoloji
Yetkisiz değişikliği önleme veya tespit hangi hedeftir?|Bütünlük|Gizlilik|Erişilebilirlik|Kapsülleme
Hizmete gerektiğinde ulaşabilme hangi hedeftir?|Erişilebilirlik|Gizlilik|Modülasyon|Adres sınıfı
Sahte üniversite bağlantısıyla parola isteme nedir?|Oltalama|Yönlendirme|Senkronizasyon|Kablolama
Hizmeti kullanılamaz hâle getirmeyi hedefleyen saldırı nedir?|DoS|DNS çözümleme|DHCP kiralama|Full-duplex
Dağıtık kaynaklardan hizmet aksatma saldırısı nedir?|DDoS|Tek bir DNS kaydı|Düz kablo|PAN
Güvenlik duvarının temel işlevi nedir?|Kurallara göre trafiği filtrelemek|Her saldırıyı kesin önlemek|Tüm parolaları üretmek|Fiber ışığını yükseltmek
En az ayrıcalık ne demektir?|Yalnız gereken izinleri vermek|Herkese yönetici yetkisi|Hiç günlük tutmamak|Tüm portları açmak
Çok faktörlü kimlik doğrulama ne ekler?|Farklı türde doğrulama faktörleri|Aynı parolayı iki kez yazmak|Parolayı herkese paylaşmak|Yalnız kullanıcı adını uzatmak
Hesaplar için hangi parola yaklaşımı uygundur?|Güçlü ve benzersiz parolalar|Her yerde aynı kısa parola|Öğrenci numarasını parola yapmak|Parolayı duvara asmak
Güncellemenin güvenliğe katkısı nedir?|Bilinen açıkları giderebilmesi|Her tehdidi sonsuza dek bitirmesi|Yedek ihtiyacını kaldırması|IP'yi gereksiz kılması
Katmanlı savunma neyi anlatır?|Birbirini tamamlayan önlemler|Tek ürüne tam güven|Yalnız kablo değiştirmek|Yalnız kullanıcı adını gizlemek
HTTPS neyi korumaya yardım eder?|Aktarımdaki iletişimi|Sitenin tüm içeriğinin dürüstlüğünü kesin garantiler|Cihazdaki her dosyayı otomatik|Her yedeği otomatik
Bir sitenin HTTPS kullanması neyi garanti etmez?|Sitenin her açıdan güvenilir olmasını|Şifreli aktarım kullanılabilmesini|Sertifika mekanizması bulunmasını|Web protokolü kullanılmasını
Yedek için hangi işlem mutlaka planlanmalıdır?|Geri yükleme denemesi|Dosyayı sadece yeniden adlandırma|Yedeği aynı saldırıya açık yerde tek kopya tutma|Hiç kontrol etmeme
Olay incelemesinde hangi veri yararlıdır?|Günlük kayıtları|Yalnız masa rengi|Kablo ambalajı|Ekran koruyucu
Ağ bölümlemenin olası yararı nedir?|Etkilenmenin yayılmasını sınırlamak|Bütün saldırıları kesin bitirmek|Tüm parolaları kaldırmak|Tüm trafiği herkese açmak
Notların izinsiz değiştirilmesi hangi hedefi bozar?|Bütünlük|Yalnız erişilebilirlik|Sadece kablo kalitesi|Yalnız gecikme
Fidye yazılımı sonrası iyileşmeye hangi önlem yardım eder?|Sağlam ve denenmiş ayrı yedek|Yalnız daha uzun kullanıcı adı|Yalnız MAC filtreleme|Tüm hesapları yönetici yapmak
Ağ güvenliği uygulamaları nerede yapılmalıdır?|İzinli laboratuvar ortamında|İzinsiz kampüs cihazlarında|Rastgele internet hedeflerinde|Başkasının hesabında`
];
const topicMaps=[
 [0,0,0,1,1,1,1,1,2,2,3,0,2,2,2,0,3,1,2,0],
 [0,0,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,1,0,2],
 [0,0,0,1,1,2,1,1,2,3,3,3,0,0,2,2,3,3,1,0],
 [0,0,0,0,3,1,1,1,1,2,2,2,1,3,3,3,1,0,0,2],
 [0,0,1,1,1,2,2,2,2,2,3,3,3,3,3,1,3,3,0,1],
 [0,0,1,2,1,1,2,1,2,2,3,3,3,3,3,3,1,2,0,0],
 [0,0,0,1,1,1,1,1,1,1,1,2,2,2,3,3,3,3,2,3],
 [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,1,2,0,3],
 [0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,1],
 [0,0,0,0,0,0,1,1,1,1,2,2,2,3,3,3,3,0,0,1],
 [0,0,0,0,0,0,0,1,1,1,1,2,2,2,3,3,3,3,3,3],
 [0,0,0,1,1,1,2,2,2,2,2,2,3,3,3,3,2,0,3,3]
];
export const questions:Question[]=banks.flatMap((bank,wi)=>bank.split('\n').map((line,qi)=>{
 const [prompt,...base]=line.split('|');const shift=(qi+wi)%4;
 const options=[...base.slice(shift),...base.slice(0,shift)];
 const section=weeks[wi].sections[topicMaps[wi][qi]];
 return {id:`w${wi+1}q${qi+1}`,week:wi+1,topic:section.title,prompt,options,correct:(4-shift)%4,explanation:`Doğru yanıt: ${base[0]}. ${explain(prompt,base[0],wi+1)}`};
}));
function explain(prompt:string,answer:string,week:number){
 if(prompt.includes('Mbps')&&week===1)return 'MB değeri 8 ile çarpılarak megabite çevrilir. İdeal süre = veri miktarı (Mbit) / hız (Mbps). Gerçekte protokol yükü ve ağ koşulları süreyi artırabilir.';
 if(prompt.includes('düğümlü'))return 'Tam örgüde her düğüm diğerleriyle bağlanır. Her bağlantıyı bir kez saymak için n(n−1)/2 kullanılır.';
 if(week===11&&prompt.includes('/26'))return '/26 öneki 6 konak biti bırakır. 2⁶ = 64 toplam adres ve klasik kullanımda 62 konak vardır. Son sekizlide bloklar 0, 64, 128, 192 noktalarında başlar.';
 const key=answer.toLocaleLowerCase('tr');
 const match=weeks[week-1].sections.find(s=>(s.text+' '+s.example).toLocaleLowerCase('tr').includes(key));
 return match?.text || weeks[week-1].sections[topicMaps[week-1][banks[week-1].split('\n').findIndex(l=>l.startsWith(prompt))]].text;
}
export function makeTest(week:number,group=false):Question[]{
 if(!group)return questions.filter(q=>q.week===week);
 const start=week-2;const counts=[7,7,6];
 return counts.flatMap((count,i)=>questions.filter(q=>q.week===start+i).filter((_,j)=>j%3===i).slice(0,count)).concat(
 questions.filter(q=>q.week>=start&&q.week<=week).filter((_,j)=>j%4===2)
 ).filter((q,i,a)=>a.findIndex(x=>x.id===q.id)===i).slice(0,20);
}
