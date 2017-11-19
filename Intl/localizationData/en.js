export default {
  locale: 'en',
  messages: {
    siteTitle: 'Developer Stories',
    addPost: 'Add Story',
    switchLanguage: 'Switch Language',
    twitterMessage: 'We are on Twitter',
    by: 'Type of event:',
    deletePost: 'Delete Post',
    createNewPost: 'Add an event that helped you become a developer',
    dateOfEvent: 'When did this happen? For Ex. (2017-01)',
    authorName: 'Type of event or resource that helped you',
    postTitle: 'Title',
    postContent: 'Describe the event',
    submit: 'Submit',
    comment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	}`,
    HTMLComment: `user <b style='font-weight: bold'>{name} </b> {value, plural,
    	  =0 {does not have <i style='font-style: italic'>any</i> comments}
    	  =1 {has <i style='font-style: italic'>#</i> comment}
    	  other {has <i style='font-style: italic'>#</i> comments}
    	}`,
    nestedDateComment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	} as of {date}`,
  },
};
