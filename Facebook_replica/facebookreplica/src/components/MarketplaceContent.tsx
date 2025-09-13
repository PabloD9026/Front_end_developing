import React from 'react';
import MarketplaceItemCard from './MarketplaceItemCard.tsx';

const dummyItems = [
  {
    id: '1',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/541617753_2178763052621987_6094096349662458319_n.jpg?stp=c0.37.261.261a_dst-jpg_p261x260_tt6&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=igFbGfTYdeMQ7kNvwGqPvMg&_nc_oc=AdmCk4qJVz-2DE42Bf7b6NMmr3hF8gVhadK_2Pqx4FRMNF6zDjkbln8PU7A10uFyZvFfyRpenwX-Y0Y-pCXrovSE&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfZopHOioO0BQHkEI1-mt_hfUkUCtBfrCDrk9nfAIKwzDw&oe=68C15360', // Replace with actual image path
    status: 'GRATIS',
    title: 'DE OCASIÓN VENDO PINES/ BROCHES METÁLICOS DE ESCUD...',
    location: 'Santa Cruz de la Sierra, S',
  },
  {
    id: '2',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/543927140_2006886853477588_538363839434872051_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=bCDcmuJ2VowQ7kNvwGcwA7L&_nc_oc=AdmV9hIXYpAkh8dn_oooPXFuXoQzXNBUA_AtYoNIqZBFDyWyBMEX2DKVj94bzJv-ytq1XdTtmHcrCSCl28Uotf3E&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfbywMJYkRipLaaYFm_UUqdQg4stIHaqOQ2GWfT3o4FtXg&oe=68C13B09', // Replace with actual image path
    status: 'GRATIS',
    title: 'Buscan hogar',
    location: 'Santa Cruz de la Sierra, S',
  },
  {
    id: '3',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/542870945_1442665213708464_8489229954630117370_n.jpg?stp=c0.16.261.261a_dst-jpg_p261x260_tt6&_nc_cat=1&ccb=1-7&_nc_sid=247b10&_nc_ohc=OGarVIUZKN0Q7kNvwHEmESx&_nc_oc=AdlXmda1_C0DKo0d8MsoKFHdhUN-WlatnA7qxoq7tQp1UmMuskUNYBQqMN-SjtsWzQsE1ihw-UvOyRZmbe_HqeYx&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfYKcHO_u9KiCuAK21bMVmEy5-QGapDNEu5fW8RJcSqgsg&oe=68C14304', // Replace with actual image path
    price: 'Bs.160',
    title: 'Control Amazon más cable',
    location: 'Santa Cruz de la Sierra, S',
  },
  // Add more dummy items
  {
    id: '4',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/532991870_1280235856892376_2586152191926334890_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260_tt6&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=QJ2Z43g85QEQ7kNvwFOAHjj&_nc_oc=AdnuNn681WtnqV9c5S7BP9uyE3zHilSG3DCK4hur8Ay88KZhxpPcIP7jqRLt_Ej5IQTQ-QeV7fXca__dHEogcGPj&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfZ44G3hnazEzqMbB-0Eyek4Zjw_bQzv38emgTNa5m7irg&oe=68C15A11', // Replace with actual image path
    price: 'Bs.30',
    title: 'AROMATIZADO TOYOTA',
    location: 'Santa Cruz de la Sierra, S',
  },
  {
    id: '5',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/460947217_1917492615399061_5056850892399255931_n.jpg?stp=c38.0.260.260a_dst-jpg_p261x260_tt6&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=lTAs_X-aCgsQ7kNvwH_Fz38&_nc_oc=Adk1QS7PAFb5IMW_GUScZPYAHPk_GqGfzs8YLdl0LrhtYx-qrEm9MBcB3fCrtRqynTGZqBEu4RiC2Or7gnqaFg3F&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfZ8JjEZ2aFa0JRwkshZyZ9uedNl9ybM6_slfVzto7FX5A&oe=68C14D0E', // Replace with actual image path
    price: 'Bs.1',
    title: 'Bouncing Ball with USB',
    location: 'Santa Cruz de la Sierra, S',
  },
  {
    id: '6',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/541290912_658314330069281_5938470831020471878_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260_tt6&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=LlWfYc5vDtQQ7kNvwHTNtP3&_nc_oc=AdmmvosZgeqmSS5c5giUppDPjoUnR0mGgcWC2xuwP1Q033qZ9FU78LnZ_iLrGrnfhxlHua9ZdLl5G7N3x7WUn8C3&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfYZFWjDz6b9KcJYhh2luhilbT3GOloH0rRJtxWlGLabqg&oe=68C15FB1', // Replace with actual image path
    status: 'GRATIS',
    title: 'OARMIO 60000mAh Power Bank',
    location: 'Santa Cruz de la Sierra, S',
  },
  {
    id: '7',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/541543455_808877524993764_62885968463104280_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260_tt6&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=Mxgx2ivTKasQ7kNvwHAA71n&_nc_oc=AdkjlGfZXXMot_PVwiMYDJny3iGmzCVfOFmuGPXdrK_pHl1h2fKJvgFUgg_BMr3n7MKfrFXjdN9G4OLfh19HbViV&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfbA2rmEzVQxfb0oWbkE8qIG0lNVjFXGY8He9eLgTnAUDw&oe=68C15BEA',
    status: 'GRATIS',
    title: 'Audífonos Bluetooth usados',
    location: 'Santa Cruz de la Sierra',
  },
  {
    id: '8',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/514706325_2481412795587565_2237375846567525672_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260_tt6&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=j3b-ZE3a_KYQ7kNvwHMVMtb&_nc_oc=Adn6pYgrrw7ClEuuMhptAhqs7ahPrpu11w381eO-jub53M30gJvx_iQuSXy0qtDzGphvR7o-SrFcCeONIdUtnhap&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfYtnvdwqOI8EVKnY76aHxieIBnaSAPtN9HUkyvyTCYMzg&oe=68C14B07',
    price: 'Bs.20',
    title: 'Planta de interior pequeña',
    location: 'Sucre, Bolivia',
  },
  {
    id: '9',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/534454775_1816828845631372_3257331209906369752_n.jpg?stp=c0.101.261.261a_dst-jpg_p261x260_tt6&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=mhZhoHnDfqgQ7kNvwG14Byb&_nc_oc=AdlZKCEDmkUqIhGdMDfLQovHuFkQZXkSR1rDqSQIiZ6bCu4l8xd8g7x7_50ui8bN7cIVfwDhOAAhUgov-nm_AV1K&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfazhjfSoSrM4OfLUyZN3FGIoTYljTqSDbJqeeEKWjdrcg&oe=68C13C82',
    price: 'Bs.400',
    title: 'Guitarra acústica para principiantes',
    location: 'Tarija, Bolivia',
  },
  {
    id: '10',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/532015183_24334978469525028_7322881505575568178_n.jpg?stp=c0.21.261.261a_dst-jpg_p261x260_tt6&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=Zl0JtbiuOEEQ7kNvwER21Mn&_nc_oc=Adl756fF5K3lLksmKbXW4L2rusmUgF1ffJqnl_IEJ8Vz_PeJuy22K4Px9dCOZBF56VBQMFVWDREsZxHL8FgRyecB&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfYErVFSlNGWT7OWxRROZHK7Wc_Fimf6NS53NTj3SJiHUw&oe=68C151D8',
    price: 'Bs.180',
    title: 'Cafetera eléctrica seminueva',
    location: 'Oruro, Bolivia',
  },
  {
    id: '11',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/540779881_1788676598703703_7014997122538566268_n.jpg?stp=c0.14.261.261a_dst-jpg_p261x260_tt6&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=NzK1EWM6TsYQ7kNvwElO7rH&_nc_oc=AdltYDjyUVyof0R_V_SjWJNR0s1kXBmm6PRsFQzvKoJtRbbX-8GYu0tSscp5xtTHS3lNpPejHmeyquywGy2v87O4&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfZiCCiJEIPH9JZ1bE4IG16Vlny12TOWLySB8nDZzIv5aA&oe=68C141C3',
    status: 'GRATIS',
    title: 'Mochila de viaje grande',
    location: 'Potosí, Bolivia',
  },
  {
    id: '12',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/541290065_795821836461739_5937799722674333524_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260_tt6&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=Qq5j2Yc9ZDwQ7kNvwF1TSJj&_nc_oc=AdknBGa2ES3CgkKNisKyFBCXG91ZCxBKgtL4YbBpAxjyq8zzhrP9MVPOP6CAqrsgYrf0rmOqiZ2jLY4VOjAdsrYh&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_Afa7iVxirV-jo8Lf1HPONLJz2tBscJpMvpJXxDqUwZh48w&oe=68C15914',
    price: 'Bs.100',
    title: 'Silla de oficina ergonómica',
    location: 'Cobija, Bolivia',
  },
  {
    id: '13',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/540353727_613707685147178_6341767795301931208_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260_tt6&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=_k-fWxjlxPAQ7kNvwE3LVg_&_nc_oc=AdlMNqihA7nlKsZgltk19EQOCrHgShqmiKuv3YBranYqrtDn7cfY-Ti24jZtdxgypAwIdfQAeMoqyh-w2vozehEq&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_Afa9N9qVFWy1olqzYuemqi3eZ7vhRNfRPieMDgaPXuC77Q&oe=68C16CF9',
    price: 'Bs.50',
    title: 'Lámpara de mesa moderna',
    location: 'Trinidad, Bolivia',
  },
  {
    id: '14',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/535481349_1165060788787238_2834282648560663975_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260_tt6&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=FiKvZpBW7KsQ7kNvwESF-zz&_nc_oc=Adm7kS3Iw7cINaubyYvTGWx7ByW_KBRKYfzgcZiO9w3f4pUYCIN3fHh4u8TH1hm84s6HTQT_oknWXXzxyQ3sbT6N&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfYav3HLoxbdVt1nXI7UykxRCdfiwcQpEy5nGzLoqqYKFQ&oe=68C14AA8',
    status: 'GRATIS',
    title: 'Teclado de computadora usado',
    location: 'Santa Cruz de la Sierra',
  },
  {
    id: '15',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/533062480_670397938680030_2022917224641678032_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260_tt6&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=bXfLavMpDCMQ7kNvwErZ-ni&_nc_oc=AdmITuQKzMMZQ9SmSF1PQvbEfUK-ObdVkpHuwu0ezKm_8MTVNdp0uyz4F_ZT9c8G2cOOyJMdyOczD0L1gziKJABf&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_Afak_QOmh-lKcX_fLIaKMnXJX58YUhgvD-DzGyFnkFDakQ&oe=68C15B4D',
    price: 'Bs.300',
    title: 'Monitor 24 pulgadas Full HD',
    location: 'La Paz, Bolivia',
  },
  {
    id: '16',
    image: 'https://scontent.fsrz4-1.fna.fbcdn.net/v/t45.5328-4/543078477_797045116198044_1063792654671766226_n.jpg?stp=c0.101.261.261a_dst-jpg_p261x260_tt6&_nc_cat=1&ccb=1-7&_nc_sid=247b10&_nc_ohc=tr1WKqz0PSMQ7kNvwHrf16s&_nc_oc=AdlSfyi9yL7b20MVftkjpP0Il2BZIVzsZI2IRlBd4ujhB8xgXXyiOfMYcBpFELONInoNbqGJQDIG-r10O_GQkaKi&_nc_zt=23&_nc_ht=scontent.fsrz4-1.fna&_nc_gid=aFNCzbuYsp_PtG_Y0CbTfA&oh=00_AfZpuyyNO_-zF4PxoJxVoPqLTznmpUq43LYaqVvDfd379Q&oe=68C143AE',
    price: 'Bs.600',
    title: 'Bicicleta de montaña M26',
    location: 'Cochabamba, Bolivia',
  },
  {
    id: '17',
    image: 'https://via.placeholder.com/220x220?text=Bag',
    status: 'GRATIS',
    title: 'Cartera de mujer de cuero',
    location: 'Santa Cruz de la Sierra',
  },
  {
    id: '18',
    image: 'https://via.placeholder.com/220x220?text=Fan',
    price: 'Bs.80',
    title: 'Ventilador de pie con control',
    location: 'Sucre, Bolivia',
  },
  {
    id: '19',
    image: 'https://via.placeholder.com/220x220?text=Webcam',
    price: 'Bs.120',
    title: 'Webcam HD para videollamadas',
    location: 'Tarija, Bolivia',
  },
];


const MarketplaceContent: React.FC = () => {
  return (
    <div className="marketplace-content">
      <h2 className="suggestions-title">Sugerencias de hoy</h2>
      <span className="location-info">📍 Santa Cruz de la Sierra - 23 km</span>

      <div className="marketplace-items-grid">
        {dummyItems.map(item => (
          <MarketplaceItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MarketplaceContent;