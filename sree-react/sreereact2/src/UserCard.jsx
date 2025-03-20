const userData = [
  {
    name: "James",
    city: "Coimbatore",
    description: "Full stack developer",
    skills: ["UI/UX", "React", "JavaScript", "HTML", "CSS"],
    online: true,
    profile: "images/pic1.jpeg",
  },
  {
    name: "Susan",
    city: "London",
    description: "Full stack developer",
    skills: ["UI/UX", "React", "JavaScript", "HTML", "CSS"],
    online: false,
    profile: "images/pic2.jpg",
  },
  {
    name: "Jas",
    city: "USA",
    description: "Full stack developer",
    skills: ["UI/UX", "React", "JavaScript", "HTML", "CSS"],
    online: false,
    profile: "images/pic1.jpeg",
  },
  {
    name:"sreekanth",
    city:"coimbatore",
    description:"full-stack-java-ddeveloper",
    skills:["java","spring","springboot","html","css","javascript","react","mysql"],

    online:true,
    profile:"images/pic1.jpeg"

  }
];

function User(props) {
  return (
    <div className="card-continer">
      {/* Conditional rendering for online/offline status */}
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} className="img" alt="user" />
      <h3>{props.name}</h3>
      <h5>{props.city}</h5>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="btn1">Message</button>
        <button className="btn2">Following</button>
      </div>
      <hr />

      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {/* Using map function to display skills */}
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const UserCard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          online={user.online}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </>
  );
};
