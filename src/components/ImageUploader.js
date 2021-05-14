import React, { Component } from 'react';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


const pond = React.createRef();


// Our app
class ImageUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Set initial files, type 'local' means this is a file
            // that has already been uploaded to the server (see docs)
            files: [{
                source: 'index.html',
                options: {
                    type: 'local'
                }
            }]
        };
    }

    

    
    
    handleInit() {
        console.log('FilePond instance has initialised', pond);
    }

    render() {
        return (
            <div className="image-uploader">
            
                {/* Pass FilePond properties as attributes */}
                <FilePond ref={ref => this.pond = ref}
                          imagePreviewHeight='170'
                          imageResizeTargetWidth='200'
                          imageResizeTargetHeight='200'
                          stylePanelLayout='compact circle'
                          styleLoadIndicatorPosition='center bottom'
                          styleButtonRemoveItemPosition='center bottom'

                          files={this.state.files}
                          allowMultiple={false}
                          server="/api"
                          oninit={() => this.handleInit() }
                          onupdatefiles={(fileItems) => {
                              // Set current file objects to this.state
                              this.setState({
                                  files: fileItems.map(fileItem => fileItem.file)
                              });
                          }}>
                </FilePond>

            </div>
        );
    }
}

export default ImageUploader;
