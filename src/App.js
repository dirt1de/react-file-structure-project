import Folder from './Folder'
import File from './File'


function App() {
  return (
    <div>
      <h2>Here is how your Desktop may look like</h2>
      <p>Double Click on the folder icon to open it</p>
      <Folder folderName="Desktop">
        <Folder folderName="Video">
          <File fileName="childhood.mp4"></File>
          <File fileName="adult.mp4"></File>
          <File fileName="wedding.mp4"></File>
        </Folder>
        <Folder folderName="Photos">
          <File fileName="me.jpg"></File>
          <File fileName="la.jpg"></File>
          <File fileName="shanghai.jpg"></File>
        </Folder>
        <Folder folderName="Applications">
          <File fileName="WeChat.exe"></File>
          <File fileName="Slack.exe"></File>
          <File fileName="QuickPlay.exe"></File>

        </Folder>
        <Folder folderName="Game">
          <File fileName="COD.exe"></File>
          <File fileName="LOL.exe"></File>

        </Folder>
      </Folder>
      

    </div>
  );
}

export default App;
