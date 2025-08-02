import React from 'react';
import UploadDetails from './upload_details';
import UploadSuccess from './upload_success';

const LoadingSpinner = () => (
  <div className="upload-loading-container">
    <div className="upload-spinner"></div>
    <p className="uploading-text">Uploading your track...</p>
  </div>
);

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      uploader_id: this.props.currentUser.id,
      genre: '',
      artist: '',
      audioFile: null,
      imageFile: null,
      imageUrl: '',
      page: 0,
      uploadStatus: false,
      errors: [],
      imageError: ''
    };

    this.handleFile = this.handleFile.bind(this);
    this.changeUpload = this.changeUpload.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/png', 'image/jpg', 'image/jpeg'];
      if (!validTypes.includes(file.type)) {
        this.setState({
          imageError: 'Upload correct file type (.png, .jpg, .jpeg)',
          imageFile: null,
          imageUrl: ''
        });
        return;
      }

      this.setState({ imageError: '' });

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        this.setState({ imageFile: file, imageUrl: fileReader.result });
      };
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.setState({ uploadStatus: true }); // start spinner

    const formData = new FormData();
    formData.append('track[title]', this.state.title);
    formData.append('track[genre]', this.state.genre);
    formData.append('track[artist]', this.state.artist);
    formData.append('track[uploader_id]', this.state.uploader_id);
    formData.append('track[track]', this.state.audioFile);

    if (this.state.imageFile) {
      formData.append('track[image]', this.state.imageFile);
    }

    this.props.createTrack(formData)
      .then(track => {
        this.setState({
          page: 2,
          trackId: track.id,
          trackUrl: track.track_url,
          photoUrl: track.image_url,
          userId: this.state.uploader_id, // add this
          uploadStatus: false,
          errors: [],
          imageError: ''
        });
      })
      .catch(err => {
        const errors = (err && err.responseJSON) || ['Upload failed.'];
        const imageError = errors.find(error =>
          error.toLowerCase().includes('image')
        ) || '';
        this.setState({ errors, imageError, uploadStatus: false });
      });
    }

  changeUpload(e) {
    e.preventDefault();
    const currentFile = e.target.files[0];

    if (currentFile && currentFile.type === 'audio/mpeg') {
      this.setState(prevState => ({
        title: prevState.title || currentFile.name.split('.')[0],
        audioFile: currentFile
      }));
    }
  }

  render() {
    const { page, uploadStatus } = this.state;

    return (
      <div className="upload">
        {uploadStatus && <LoadingSpinner />}
        
        {!uploadStatus && page === 0 && (
          <UploadDetails
            changeUpload={this.changeUpload}
            state={this.state}
            update={this.update}
            handleFile={this.handleFile}
            handleSubmit={this.handleSubmit}
          />
        )}
        
        {!uploadStatus && page === 2 && (
          <UploadSuccess
            state={this.state}
            currentUser={this.props.currentUser}
          />
        )}
      </div>
    );
  }
  
}

export default Upload;
