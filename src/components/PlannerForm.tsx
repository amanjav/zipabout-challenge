import React from 'react';
import { useForm } from 'react-hook-form';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

type FormData = {
    journeyOrigin: string;
    journeyDestination: string;
};

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

const PlannerForm = ({ stations }: any) => {
    const history = useHistory();

    const { register, formState: { errors }, handleSubmit } = useForm<FormData>();

    const [originValue, setOrigin] = React.useState("");
    const [destinationValue, setDestination] = React.useState("");

    const onSubmit = () => {
        history.push({
            pathname: '/confirmation',
            state: { originValue, destinationValue }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <br />

                <Autocomplete
                    value={originValue}
                    onChange={(event: any, newValue: any) => {
                        setOrigin(newValue);
                    }}
                    options={stations}
                    getOptionLabel={(option: any) => option.name}
                    style={{ width: 250, display: "inline-block" }}
                    renderInput={(params) => <TextField {...params} label="Enter origin" variant="outlined"
                        {...register("journeyOrigin", { required: true })}
                    />}
                />
                <p className="error-message">{errors.journeyOrigin && "Last name is required"}</p>

                <Autocomplete
                    value={destinationValue}
                    onChange={(event: any, newValue: any) => {
                        setDestination(newValue);
                    }}
                    options={stations}
                    getOptionLabel={(option: any) => option.name}
                    style={{ width: 250, display: "inline-block" }}
                    renderInput={(params) => <TextField {...params} label="Enter destination" variant="outlined"
                        {...register("journeyDestination", { required: true })}
                    />}
                />
                <p className="error-message">{errors.journeyDestination && <span className="error">This field is required</span>}</p>

                <input
                    type='submit' className="btn-primary"
                    value='Confirm'
                />

                <br />
            </form>
        </div>
    );
};

export default PlannerForm;