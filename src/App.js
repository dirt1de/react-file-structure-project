import Folder from './Folder'
import File from './File'


function App() {
  return (
    <div>
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
          <File fileName="WeChat"></File>
          <File fileName="Slack"></File>
          <File fileName="QuickPlay"></File>

        </Folder>
        <Folder folderName="Game">
          <File fileName="COD"></File>
          <File fileName="LOL"></File>

        </Folder>
      </Folder>
      

    </div>
  );
}

export default App;
