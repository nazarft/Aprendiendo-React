import { UserUserName } from './UserUserName.jsx';
import PropTypes from 'prop-types';

export function UserProfile(props) {
    return (
        <article className="followCard">
            <header className="followCard-header">
                <img className="followCard-avatar" src="https://unavatar.io/github/37t?fallback=https://source.boringavatars.com/marble/120/1337_user?colors=264653r,2a9d8f,e9c46a,f4a261,e76f51" />
                <div className="followCard-info">
                    <UserUserName
                        username={props.username} />
                    <span className='followCard-infoUsername'>@nazarmlk</span>
                </div>
            </header>
            <aside>
                <button className="followCard-button">Seguir</button>
            </aside>
        </article>
    );
}
UserProfile.propTypes = {
    username: PropTypes.string.isRequired
}