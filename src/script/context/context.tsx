import React, { createContext, useState, useEffect } from 'react';

export type DataContext = {
    data: any[];
    setData: (data: []) => void;
    loaded: boolean;
};

const contextDefaultValues: DataContext = {
    data: [],
    setData: () => {},
    loaded: false,
};

type Props = {
    children: React.ReactNode,
};

export const AppContext = createContext<DataContext>(contextDefaultValues);

const AppProvider: React.FC<Props> = (
    {...props}) => {
    const [data, setData] = useState(contextDefaultValues.data);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=acTKIzchDv2tEf4i5h4vSTEbZ8EHRmAjNYAwycPs&count=6&thumbs=true')
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                    setLoaded(true);
                },
                (error) => {
                    setError(error);
                    setLoaded(true);
                }
            )
    }, [])

    return (
        <AppContext.Provider value={{ data, setData, loaded }}>
            { props.children }
        </AppContext.Provider>
    )
}

export default AppProvider;
