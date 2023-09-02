import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Data from "../../Data/Senior.json";
import style from "./TeamCard.module.scss";

const TeamCard = () => {
  return Data.map((d) => (
    <div className={style.teamSection} key={d[0].id}>
      {d.map((data) => (
        <div className={style.teamCard} key={data.id}>
          <div className={style.body}>
            <div className={style.cardImages}>
              <img src={data.image} alt="" />
            </div>
            <div className={style.teamTitle}>{data.name}</div>
          </div>
          <div className={style.core_mem_text}>{data.rank}</div>
          <div className={style.socialMedia}>
            {data.fb && (
              <div className={style.SocialLogo}>
                <a href={data.fb} target="_blank" rel="noreferrer" label="#">
                  <FaFacebook size={35} />
                </a>
              </div>
            )}
            {data.linkedln && (
              <div className={style.SocialLogo}>
                <a href={data.linkedln} target="_blank" rel="noreferrer" label="#">
                  <FaLinkedin size={35} />
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  ));
};

export default TeamCard;
