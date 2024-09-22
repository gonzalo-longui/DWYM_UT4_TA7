import style from './card.module.css';
import PropTypes from 'prop-types';
import { CircleX } from 'lucide-react';


export function Card({ tarea, eliminarTarea }) {
  return (
    <li className={style.taskCard}>
        {tarea}
        <CircleX className={style.iconoEliminar} onClick={eliminarTarea}/>
    </li>
    )
};

Card.propTypes = {
    tarea: PropTypes.string.isRequired,
    eliminarTarea: PropTypes.func.isRequired,
};