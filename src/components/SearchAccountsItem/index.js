import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchAccountsItem.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function SearchAccountsItem({ data }) {
    return (
        <Link to={`/@${data.username}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0aa2721f235d625985b0de45c8a80e58~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=2fb18130&x-expires=1767254400&x-signature=R2fz%2BcNBORdiGXm7OSP3gMvuPug%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my2"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('userName')}>{data.username}</span>
            </div>
        </Link>
    );
}

export default SearchAccountsItem;
