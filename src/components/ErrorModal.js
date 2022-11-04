import { Icon } from '@iconify/react';

function ErrorModal({ styles, error, setError, setShowModal, setShowSchools }) {
    const handleClick = () => {
        setError(null);
        setShowModal(false);
    }

    return (
        <div className={styles.errorModal}>
            {error && <p className={styles.errorModalText}>{error}</p>}

          <button 
            className={styles.closeModalBtn}
            onClick={handleClick}
            aria-label='toggle error modal'
          >
            <Icon icon='gg:close' />
          </button>
        </div>
    );
}

export default ErrorModal;