
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCircleUser } from '@fortawesome/free-solid-svg-icons' 
import maleAvatar  from '../assets/images/female-avatar.jpg';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <input type="checkbox" className="toggle toggle-warning" checked />
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={maleAvatar} alt="Logo Avatar"/>
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Perfil
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Configuracion</a></li>
          <li><a>Salir</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
  
      
      
    }
    export default Navbar;
    