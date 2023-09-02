import style from "./Team.module.scss";
import TeamTab from "../../Components/TeamTab/TeamTab";
import TeamCard from "../../Components/TeamCard/TeamCard2";
const Team = () => {
  return (
    <div className={style.team}>
      <h1>MEET OUR TEAM</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Malesuada mauris auctor nisl
        pellentesque facilisis ornare euismod sit. Fermentum velit cras sed
        Lorem ipsum dolor sit amet consectetur. Malesuada mauris auctor nisl
        pellentesque facilisis ornare euismod sit. Fermentum velit cras sed
        Lorem ipsum dolor sit amet consectetur. Malesuada mauris auctor nisl
        pellentesque facilisis ornare euismod sit. Fermentum velit cras sed
        Lorem ipsum dolor sit amet consectetur. Malesuada mauris auctor nisl
        pellentesque facilisis ornare euismod sit. Fermentum velit cras sed
        Lorem ipsum dolor sit amet consectetur. Malesuada mauris auctor nisl
        pellentesque facilisis ornare euismod sit. Fermentum velit cras sed{" "}
      </p>
      <TeamCard/>
      <TeamTab />
    </div>
  );
};

export default Team;
