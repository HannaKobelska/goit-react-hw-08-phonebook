import { NavLink } from 'react-router-dom';
import css from "./NotFound.module.css";

export default function NotFound() {
  return (
    
      <div className={css.div}>
          <img
            src="https://papik.pro/uploads/posts/2022-08/thumbs/1661927859_31-papik-pro-p-smailik-razocharovanie-png-32.png"
            alt="not found"
                    width="400"
                    height="400"
          />
          <p className={css.text}>
            Oooops! Page not found!
                <NavLink to="/" className={css.link}>
                  RETURN HOME
                </NavLink>
          </p>
      </div>
    
  );
}

