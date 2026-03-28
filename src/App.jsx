const experiences = [
  'Uşak Üniversitesi Mezunlar Ofisi ve Kariyer Geliştirme Koordinatörlüğü - 1 yıl başkan yardımcılığı'
];

const projects = [
  'Proje ortağı ile orta ve üzeri yaş grubu için dijital okuryazarlık semineri düzenleme'
];

const skills = [
  'Adobe Premiere Pro',
  'Adobe Illustrator',
  'Cupcut',
  'Blender',
  'SolidWorks',
  'Autocad',
  'Word',
  'PowerPoint',
  'Creo',
  'NX'
];

const hobbies = [
  'Fitness ve calisthenics',
  'Yeni insanlarla tanışmak',
  'Kitap okumak',
  'Müzik dinlemek',
  'Ailem ile vakit geçirmek',
  'Satranç oynamak',
  'Yeni lezzetler denemek'
];

const education = ['Yeni Medya ve İletişim - 4. Sınıf Öğrencisi'];

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.14),_transparent_38%),#020617]">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-8 md:py-12">
        <section className="rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 shadow-glow backdrop-blur md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Kişisel Portfolyo
              </p>
              <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">Mehmet ANDAÇ</h1>
              <p className="mt-3 text-lg font-medium text-cyan-200">Yeni Medya ve İletişim Öğrencisi 4. Sınıf</p>
              <p className="mt-4 max-w-xl text-slate-300">
                Samimi, enerjik ve saygılı bir iletişim tarzıyla influencer olup insanlara örnek olmayı ve sevdiğim bir işi yapmayı hedefliyorum.
              </p>
              <a
                href="#iletisim"
                className="mt-6 inline-flex items-center rounded-xl border border-cyan-300/50 bg-cyan-400/20 px-5 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-300/30"
              >
                Benimle İletişime Geç
              </a>
            </div>
            <div className="mx-auto flex h-72 w-full max-w-xs items-center justify-center rounded-2xl border border-cyan-300/30 bg-slate-900/70 p-6 text-center">
              <p className="text-sm text-slate-300">
                Portre görseli eklendiğinde bu alanda görüntülenecektir.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-purple-300/20 bg-slate-900/60 p-6 backdrop-blur md:p-8">
          <h2 className="text-2xl font-bold text-white">Hakkımda</h2>
          <p className="mt-4 text-slate-300">
            Yeni ve farklı şeyleri denemeyi seven, nazik ve insan ilişkilerinde özenli biriyim. Okulumdaki yazılım kulübünde aktif rol alıyor ve hackathon'lara katılıyorum.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <Card title="Deneyimler" items={experiences} />
          <Card title="Eğitim" items={education} />
          <Card title="Projeler" items={projects} />
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <TagSection title="Yetenekler" tags={skills} />
          <TagSection title="Hobiler ve İlgi Alanları" tags={hobbies} />
        </section>

        <section id="iletisim" className="rounded-3xl border border-cyan-200/20 bg-slate-900/60 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">İletişim</h2>
          <p className="mt-4 text-slate-300">
            Email:{' '}
            <a className="font-semibold text-cyan-200 hover:text-cyan-100" href="mailto:mehmetanda45@gmail.com">
              mehmetanda45@gmail.com
            </a>
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Mehmet ANDAÇ. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}

function Card({ title, items }) {
  return (
    <article className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-slate-300">
        {items.map((item) => (
          <li key={item} className="rounded-xl border border-slate-700/70 bg-slate-800/60 p-3">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function TagSection({ title, tags }) {
  return (
    <article className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
