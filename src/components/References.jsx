const references = [
  "Agoncillo, T. (1990). History of the Filipino People. Quezon City: R.P. Garcia Publishing.",

  "Camposano, C. C. (2019). Citizenship and civic education: A critical elaboration on the pedagogy of Rizal’s La Liga Filipina. Philippine Journal of Public Policy: Interdisciplinary Development Perspectives, 1-28.",

  "Constantino, R. (1985). Veneration Without Understanding. Mandaluyong: Cacho Hermanos.",

  "Constantino, R. (1970). The miseducation of the Filipino. Foundation for Nationalist Studies. https://eaop.ucsd.edu/198/group-identity/THE%20MISEDUCATION%20OF%20THE%20FILIPINO.pdf",

  "Concepcion, M. (2024). Activism and UP’s mandate of public service. https://up.edu.ph/activism-and-ups-mandate-to-public-service/",

  "Dimasalang Laong Laan. (n.d.). Philippines in the 19th century. https://dimasalanglaonglaan.wordpress.com/philippines-in-the-19th-century/",

  "Jandoc, K. R. L. (2012, August 13). La Liga Filipina: Rizal and institutional change. Jandoc | Philippine Review of Economics (Online ISSN 2984-8156). https://pre.econ.upd.edu.ph/index.php/pre/article/view/669",

  "Legarda, B. (2011). The Economic Background of Rizal's Time. The Philippine Review of Economics, 48(2), 1-22.",

  "Lim, J. (2013). Interpretation: Education Gives Luster to Motherland. https://thelifeandworksofrizal.blogspot.com/2013/06/interpretation-education-gives-luster.html",

  "LitCharts. (n.d.). Education theme in Noli Me Tangere. Retrieved from https://www.litcharts.com/lit/noli-me-tangere/themes/education",

  "Marilyn Balmeo, L. P. T., Almeda, M. T., Balangue, V. M., Costales, M., Dytiapco, J., Ibay, S. C. R., ... & Natividad, M. A. G. Inclusion of the Life and Works of Jose Rizal to the Improvement of the Students’ Moral Character, Personal Discipline, Civic Conscience, and Duties of Citizenship.",

  "Oxford Business Group. (2017). Education reform in the Philippines aims for better quality and more access. https://oxfordbusinessgroup.com/reports/philippines/2017-report/economy/a-thorough-examination-substantial-reform-has-brought-with-it-a-variety-of-challenges",

  "Quibuyen, F. (1999). Towards a Radical Rizal. Quezon City: Ateneo de Manila University Press.",

  "Quibuyen, F. (2021). Notes on Rizal’s El filibusterismo. www.academia.edu. https://www.academia.edu/51035859/Notes_on_Rizals_El_Filibusterismo?auto=download",

  "Studocu. (n.d.). 19th century Philippines as Rizal's context: The many-sided personality of Rizal. https://www.studocu.com/ph/document/san-jose-community-college/financial-management/19th-century-philippines-as-rizals-context-the-many-sided-personality-of-rizal/26474723",

  "Wong, A. (2016). Philippine cultural diplomacy: Unraveling its full potential. Vol. III, No. 2. Foreign Service Institute. https://fsi.gov.ph/philippine-cultural-diplomacy-unraveling-its-full-potential/",
];

export default function References() {
  return (
    <div className="px-10 mb-10">
      <h1 className="font-[PlayfairDisplay] italic font-bold text-justify">
        References:
      </h1>
      <div>
        <ul className="list-disc space-y-2 mt-4 text-[0.9rem] px-10">
          {references.map((reference, index) => {
            return (
              <li key={index} className="text-justify">
                {reference}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
