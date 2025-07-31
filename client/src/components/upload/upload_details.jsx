import React from 'react';

class UploadDetails extends React.Component {
    render() {
        const preview = this.props.state.imageUrl
            ? (
                <img
                    src={
                        this.props.state.imageUrl.startsWith("/rails")
                            ? `${process.env.REACT_APP_API_BASE_URL}${this.props.state.imageUrl}`
                            : this.props.state.imageUrl
                    }
                    className="song-artwork-upload2"
                    alt="song preview"
                />
            )
            : <span className="song-artwork-upload"></span>;


        // const preview = this.props.state.imageUrl
        //     ? <img src={this.props.state.imageUrl} className="song-artwork-upload2" alt="song preview" />
        //     : <span className="song-artwork-upload"></span>;

        if (this.props.state.page === 0) {
            return (
                <div className="upload-main">
                    <div className="upload-page-header">
                        <h1>Upload your audio files</h1>
                    </div>
                    <div className="basic-file-box">
                        <div className="file-info">
                            <div className="picture-holder">
                                {preview}
                                <div className="upload-button-holder">
                                    <input
                                        type="file"
                                        className="upload-image"
                                        id="upload-image"
                                        name="upload-image"
                                        accept="image/*"
                                        onChange={this.props.handleFile}
                                    />
                                    <label htmlFor="upload-image">
                                        {this.props.state.imageUrl ? "Update image" : "Upload image"}
                                    </label>
                                </div>
                                {this.props.state.imageError && (
                                    <div className="upload-image-error" style={{ color: 'red', marginTop: '5px' }}>
                                        {this.props.state.imageError.includes("content type")
                                            ? "Incorrect file type (.png, .jpg, .jpeg)"
                                            : this.props.state.imageError
                                        }
                                    </div>
                                )}
                            </div>

                            <div className="song-details">
                                <p>Title</p>
                                <input
                                    type="text"
                                    defaultValue={this.props.state.title}
                                    onChange={this.props.update("title")}
                                    required
                                />

                                <p>Artist</p>
                                <input
                                    type="text"
                                    defaultValue={this.props.state.artist}
                                    onChange={this.props.update("artist")}
                                    required
                                />

                                <p>Genre</p>
                                <select onChange={this.props.update("genre")} defaultValue="">
                                    <option disabled value=""> -- select genre -- </option>
                                    <option value="R&B">R&B</option>
                                    <option value="Rap">Rap</option>
                                    <option value="Latin">Latin</option>
                                    <option value="Pop">Pop</option>
                                    <option value="EDM">EDM</option>
                                </select>

                                {/* ✅ NEW AUDIO UPLOAD INPUT */}
                                <p style={{ marginTop: "20px" }}>.MP3 File</p>
                                <input
                                    type="file"
                                    id="audio-upload"
                                    accept=".mp3,audio/*"
                                    onChange={this.props.changeUpload}
                                    className="upload-audio"
                                />
                                <div className="upload-footer">
                                    {this.props.state.errors && this.props.state.errors.length > 0 && (
                                        <ul className="upload-errors">
                                            {this.props.state.errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                        </ul>
                                    )}
                                    <button className="upload-button-upload" onClick={this.props.handleSubmit}>Upload File</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="upload-footer-text">
                        Legal - Do Not Sell or Share My Personal Information - Privacy - Cookie Policy - Cookie Manager - Imprint - About us - Copyright - Feedback
                    </p>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default UploadDetails;
