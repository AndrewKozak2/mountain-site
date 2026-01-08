import s from "./Section.module.css";

const Section = ({
  id,
  number,
  subtitle,
  title,
  description,
  image,
  reversed,
}) => {
  return (
    <section id={id} className={`${s.section} ${reversed ? s.reversed : ""}`}>
      <div className={s.content}>
        <img src={number} alt="Section Number" className={s.number} />

        <span className={s.subtitle}>{subtitle}</span>
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
    </section>
  );
};

export default Section;
