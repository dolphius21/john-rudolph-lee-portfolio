import Project from './project';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="heading">Projects</h2>
        <Project
          name={'Codewiz App'}
          text={
            'A Course Booking App I did using Bootstrap, & Vanilla Javascript for the front-end side, while I used NodeJs, EpressJS, & MongoDB for the back-end.'
          }
          source={'/codewiz-thumbnail.jpg'}
          url={'https://dolphius21.gitlab.io/cs2_booking_system_fe/index.html'}
        />
        <div className="col">
          <Project
            name={'Spendwise App'}
            text={
              'A Budget Tracking App I did using CSS, & NextJS for the front-end side, while I used NodeJs, EpressJS, & MongoDB for the back-end.'
            }
            source={'/spendwise-thumbnail.jpg'}
            url={'https://budget-tracker-cs3.vercel.app/'}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
