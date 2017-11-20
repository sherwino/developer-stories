import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import ReactDOM from 'react-dom';
import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

// Import Style
import styles from './PostCreateWidget.css';

//Import the Dropdown/Select Components
import States from './States';

export class PostCreateWidget extends Component {
  addPost = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewPost" /></h2>
          <input placeholder={this.props.intl.messages.postTitle} className={styles['form-field']} ref="title" /> {/* event title */}
          <h2 className={styles['form-title']}>{this.props.intl.messages.authorName}</h2>
          <States label="" searchable />
          <h2 className={styles['form-title']}>Date of Event:</h2>
          <input placeholder={this.props.intl.messages.dateOfEvent} className={styles['form-field']}
          id="event-date" type="month" ref="event-month" min="1950-01" required pattern="[0-9]{4}-[0-9]{2}"/> {/* event date, works diff on firefox and chrome */}
          <span class="validity"></span>
          <textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']} ref="content" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addPost}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(PostCreateWidget);
