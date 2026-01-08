import s from "./Section.module.css";

const Section = ({
  numberIcon, 
  number,
  subtitle,
  title,
  description,
  image,
  isReversed,
}) => {
  return (
    <div
      className={`${s.section} ${isReversed ? s.reversed : ""}`}
      id={`section-${number}`}
    >
      <div className={s.content}>
        <img src={numberIcon} alt={number} className={s.number} />

        <div className={s.subtitle}>{subtitle}</div>
        <h2 className={s.title}>{title}</h2>
        <p className={s.description}>{description}</p>

        <a href="#" className={s.readMore}>
          read more
          <span>&rarr;</span>
        </a>
      </div>

      <div className={s.imageContainer}>
        <img src={image} alt={title} className={s.image} />
      </div>
    </div>
  );
};

export default Section;
