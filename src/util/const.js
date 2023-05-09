// export routes like const
// loading; login; register; dashboard; servicios; servicio; solicitar; buscandoMap; enCaminoMap; llegoMap; calificar; terminos; saludo; explorar; seleccionar; contratar; canceladoMap; recuperarContraseña; contraseñaCodigo; agendar; programando; programados; perfil; support; faqs

//TODO:  todas las constantes en ingles
export const loading = 'Loading';
export const login = 'Login';
export const register = 'Register';
export const dashboardStack = 'DashboardStack';
export const dashboard = 'Dashboard';
export const home = 'Home';
export const servicios = 'Servicios';
export const service = 'Service';
export const solicitar = 'Solicitar';
export const buscandoMap = 'BuscandoMap';
export const enCaminoMap = 'EnCaminoMap';
export const llegoMap = 'LlegoMap';
export const calificar = 'Calificar';
export const terms = 'Terms';
export const saludo = 'Saludo';
export const explore = 'Explore';
export const seleccionar = 'Seleccionar';
export const contratar = 'Contratar';
export const canceladoMap = 'CanceladoMap';
export const passwordRecovery = 'PasswordRecovery';
export const passwordCode = 'PasswordCode';
export const newPassword = 'NewPassword';
export const agendar = 'Agendar';
export const programando = 'Programando';
export const programados = 'Programados';
export const perfil = 'Perfil';
export const support = 'Support';
export const faqs = 'Faqs';
export const walkthrough = 'Walkthrough';

import LimpiezaImage from '../assets/images/services/limpieza.png';
import ConduccionImage from '../assets/images/services/conduccion.png';
import BarberiaImage from '../assets/images/services/barberia.png';
import GruaImage from '../assets/images/services/grua.png';
import LavadoImage from '../assets/images/services/lavado.png';
import ManicureImage from '../assets/images/services/manicure.png';
import MantenimientoImage from '../assets/images/services/mantenimiento.png';
import MaquillajeImage from '../assets/images/services/maquillaje.png';
import MedicoImage from '../assets/images/services/medico.png';
import MudanzaImage from '../assets/images/services/mudanza.png';
import NineroImage from '../assets/images/services/ninero.png';
import PasearImage from '../assets/images/services/pasear.png';
import PeluqueriaImage from '../assets/images/services/peluqueria.png';
import PlomeriaImage from '../assets/images/services/plomeria.png';
import TallerImage from '../assets/images/services/taller.png';
import VeterinariaImage from '../assets/images/services/veterinaria.png';

//create services array of objects of service with title and id: barberia, conduccion, grua, lavado, limpieza, manicure, mantenimiento, maquillaje, medico, mudanza, ninero, pasear, peluqueria, plomeria, taller, veteriniaria
export const Services = [
  {
    title: 'Barbería',
    id: 'barberia',
    image: BarberiaImage,
  },
  {
    title: 'Conducción',
    id: 'conduccion',
    image: ConduccionImage,
  },
  {
    title: 'Grua',
    id: 'grua',
    image: GruaImage,
  },
  {
    title: 'Lavado',
    id: 'lavado',
    image: LavadoImage,
  },
  {
    title: 'Limpieza',
    id: 'limpieza',
    image: LimpiezaImage,
  },
  {
    title: 'Manicure',
    id: 'manicure',
    image: ManicureImage,
  },
  {
    title: 'Mantenimiento',
    id: 'mantenimiento',
    image: MantenimientoImage,
  },
  {
    title: 'Maquillaje',
    id: 'maquillaje',
    image: MaquillajeImage,
  },
  {
    title: 'Médico',
    id: 'medico',
    image: MedicoImage,
  },
  {
    title: 'Mudanza',
    id: 'mudanza',
    image: MudanzaImage,
  },
  {
    title: 'Niñera',
    id: 'ninera',
    image: NineroImage,
  },
  {
    title: 'Pasear',
    id: 'pasear',
    image: PasearImage,
  },
  {
    title: 'Peluquería',
    id: 'peluqueria',
    image: PeluqueriaImage,
  },
  {
    title: 'Plomería',
    id: 'plomeria',
    image: PlomeriaImage,
  },
  {
    title: 'Taller',
    id: 'taller',
    image: TallerImage,
  },
  {
    title: 'Veterinaria',
    id: 'veterinaria',
    image: VeterinariaImage,
  },
];
