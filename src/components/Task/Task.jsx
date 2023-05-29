import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/operations';

// import { MdClose } from 'react-icons/md';
import css from './Task.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <label className="checkbox-label">
        <input
          type="checkbox"
          className={css.checkbox}
          checked={task.completed}
          onChange={handleToggle}
        />
      </label>
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        Delete{/* <MdClose size={24} /> */}
      </button>
    </div>
  );
};
