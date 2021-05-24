import "./mapbox.styles.scss"
import {mapboxAccessToken} from "../../variables"
import "mapbox-gl/dist/mapbox-gl.css"

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Mapbox = ({coordinates}) => {

    const Map = ReactMapboxGl({
        accessToken: mapboxAccessToken
      });

    return (
        <div  className="map-container">
            <Map
                // eslint-disable-next-line
                style={"mapbox://styles/mapbox/streets-v9"}
                containerStyle={{
                    height: '100%',
                    width: '100%',
                }}
                zoom= {[12]}
                center={[coordinates[0], coordinates[1]]}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[coordinates[0], coordinates[1]]} />
                </Layer>
            </Map>
        </div>
    );
}

export default Mapbox;