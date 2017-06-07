/**
 * @author lusinabrian on 07/06/17.
 * @notes:
 */

/**
 * used to format dropdown for forms
 * */
export function authorsFormattedDropDown (authors) {
  return authors.map(author => {
    return{
      value: author.id,
      text: author.firstName + " " + author.lastName
    };
  });
}
