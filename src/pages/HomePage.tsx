import ProfileCard from '../components/ProfileCard';
import ContactInfo from '../components/ContactInfo';
import RepoList from '../components/RepoList';
import ResumeSection from '../components/ResumeSection';

function HomePage() {
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

export default HomePage;
