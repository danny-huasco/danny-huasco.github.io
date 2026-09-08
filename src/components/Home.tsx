import ProfileCard from './ProfileCard';
import ContactInfo from './ContactInfo';
import RepoList from './RepoList';
import ResumeSection from './ResumeSection';

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-lg-6">
            <ProfileCard />
          </div>
          <div className="col-lg-4">
            <ContactInfo />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <RepoList />
      </div>
      <div className="container-fluid">
        <ResumeSection />
      </div>
    </>
  );
}

export default Home;
