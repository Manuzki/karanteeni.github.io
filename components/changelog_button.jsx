'use strict';


class ChangeLogButton extends React.Component {
    render() {
        return (
            <a href="muutokset" className="btn btn-outline-light kara-btn" role="button">
                Muutosloki <i className="fas fa-arrow-right"></i>
            </a>
        )
    }
}

const VoteLinks = () => {
    return (
        <React.Fragment>
            <h5 class="card-title"><i class="fas fa-poll-h card-title-icon"></i>Äänestäminen</h5>
            <p>
                <a href="https://minecraft-mp.com/server/194896/vote/" target="_blank" className="btn btn-outline-light kara-btn" role="button">Äänestyslinkki 1</a>
            </p>
            <p>
                <a href="https://topg.org/Minecraft/in-515100" target="_blank" className="btn btn-outline-light kara-btn" role="button">Äänestyslinkki 2</a>
            </p>
        </React.Fragment>
    )
}

const div = document.querySelector('#changelog_button');
const vote = document.querySelector('#votecontainer');
ReactDOM.render(<ChangeLogButton />, div);
ReactDOM.render(<VoteLinks />, vote)