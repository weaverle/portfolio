import React from 'react';
import profile from '../images/profile.JPG';

const About = () => {
	return(
		<div className="about">
      <div className="py-lg-5">
        <div className="row">
          <div className="col-md pb-3">
            <img src={profile} alt="Lauren Weaver" height="100px" width="100px" style={{borderRadius: 100}} />
          </div>
          <div className="col-md-10 px-lg-5">
            <h3>About Me</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec massa accumsan, interdum velit et, tincidunt nisi. Sed eu aliquet dolor. Curabitur lacinia porttitor tincidunt. Mauris tincidunt ipsum non purus egestas volutpat. Fusce euismod porta sapien, id maximus magna consectetur dapibus. Integer magna mauris, euismod at porta ut, mattis non tortor. Mauris luctus ornare leo.
            </p>
            <p>
            Donec a est dignissim, tempor elit id, semper leo. Sed posuere cursus libero, eu faucibus nisl ornare quis. Donec viverra consectetur augue in gravida. Suspendisse pellentesque elit ipsum, nec luctus tortor feugiat vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ut arcu quis sapien consectetur commodo. Nam vel dolor ut augue blandit rutrum. Sed mollis dolor vel nibh convallis porta. Nullam ultrices ullamcorper leo eu maximus. Nullam sagittis sapien eu tellus ullamcorper, nec consectetur orci porta. In consequat felis libero, ut congue arcu aliquam quis. Sed in quam purus.
            </p>
            <p>
            Ut efficitur dui magna, suscipit auctor mauris tempus quis. In fringilla elit tortor, eu mollis odio scelerisque vel. Nunc sed diam quis nunc feugiat ornare. Duis eget tincidunt dolor. Phasellus et mauris eget metus vulputate feugiat quis sed sem. Vivamus eget nulla augue. Curabitur ut dui non turpis ornare mollis eget eu felis. Duis ultrices eleifend ligula, ac sodales eros mollis id. Nam a ipsum in enim molestie congue.
            </p>
            <p>
            Duis quis lacinia libero. Vestibulum pellentesque quis sem a tempus. Mauris suscipit molestie arcu id lacinia. Sed ornare placerat ante. Cras quis euismod lacus. Aliquam tellus nisi, lobortis nec congue vestibulum, finibus vel nisi. Vivamus gravida odio ut facilisis vulputate. Quisque lacinia id purus sed laoreet. Suspendisse porttitor nisi gravida, pulvinar augue a, consequat urna. Maecenas et nisl placerat, maximus nisi at, scelerisque erat.
            </p>
            <p>
            Sed condimentum ut sem ut pellentesque. Mauris in ipsum non augue molestie gravida. Duis facilisis tellus elit, vel sollicitudin sapien egestas et. Nulla blandit est risus, nec auctor nulla suscipit id. Aliquam vehicula accumsan consequat. Sed non nulla non dolor vestibulum sagittis sit amet porta nibh. Morbi eu vehicula quam. Cras sit amet erat id turpis scelerisque tempor in eget libero. Quisque vulputate nulla ligula, nec lobortis sem vulputate at.
            </p>

          </div>
        </div>
      </div>
    </div>
	)
}

export default About;