//this file contains the selector functions that would help with
//data modeling and mapping in redux mapStateToProps

export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + " " + author.lastName
    };
  });
}
