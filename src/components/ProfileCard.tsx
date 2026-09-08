import profilePic from '../../assets/prof-pic.png';

function ProfileCard() {
  return (
    <div className="card mb-3 mt-3 mx-auto" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={profilePic} className="img-fluid rounded-start" alt="Profile" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">WEB DEV AND STUDENT</h5>
            <p className="card-text">
              Let&apos;s say I love being a developer, here is where that text about mission and vision goes and motivates you to{' '}
              <a href="#/contact">contact me</a>.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">&ldquo;Love what you do and you&apos;ll never have to work&rdquo;</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
