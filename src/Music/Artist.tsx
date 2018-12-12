import * as React from 'react';

interface IMapProps {
    id: number;
    firstName: string;
    lastName: string;
    born?: string;
}

export const Artist: React.SFC<IMapProps> = ({
    id,
    firstName,
    lastName,
    born,
}): JSX.Element => {
    return (
        <React.Fragment key={id}>
            <div className="artist">
                <h2>{firstName} {lastName}</h2>
                <p>
                    {born && (
                        <React.Fragment>Born: {born}</React.Fragment>
                    )}
                </p>
            </div>
        </React.Fragment>
    )
}

// export default class Artist extends React.Component<IProps> {
//     public render() {
//         const { id, firstName, lastName, born } = this.props;
//         return(
//             <React.Fragment key={id}>
//                 <div className="artist">
//                     <h2>{firstName} {lastName}</h2>
//                     <p>
//                         {born && (
//                             <React.Fragment>Born: {born}</React.Fragment>
//                         )}
//                     </p>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }
