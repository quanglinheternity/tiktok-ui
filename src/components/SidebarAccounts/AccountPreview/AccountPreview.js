import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0aa2721f235d625985b0de45c8a80e58~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=2fb18130&x-expires=1767254400&x-signature=R2fz%2BcNBORdiGXm7OSP3gMvuPug%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my2"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <h4 className={cx('name')}>
                    <span>Quanglinh</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('userName')}>nguyen quang linh</span>
            </div>
            <p className={cx('footer')}>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
