import React from 'react';
import PlannerForm from './PlannerForm';

export interface JourneyDetails {
    journeyOrigin: string;
    journeyDestination: string;
}

export interface StaionsArr {
    stations: any;
}

export interface StationObj {
    additionalCodes: any[];
    code: string;
    codeType: string;
    geohash: string;
    latitude: number;
    locality: string;
    longitude: number;
    name: string;
}


const JourneyPlanner = () => {
    const [stations, setStations] = React.useState<StaionsArr['stations']>([])

    React.useEffect(() => {
        getStations();
        return () => console.log('unmounting...');
    }, []);

    const getStations = () => {
        fetch('all_stations.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (stations) {
                setStations(stations);
            });
    }

    return (
        <div className="planner-wrapper">
            <div className="image-wrapper">
                <img src="https://images.theconversation.com/files/300236/original/file-20191105-88382-nasrla.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" alt="transport" />
            </div>
            <div className="wrapper-content">
                <p>Tell us about your journey to set up live updates and disruption information.</p>
                <PlannerForm stations={stations} />
            </div>
        </div>
    );
};

export default JourneyPlanner;