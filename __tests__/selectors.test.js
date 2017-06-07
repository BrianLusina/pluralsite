/**
 * @author lusinabrian on 07/06/17.
 * @notes: selector tests
 */

import expect from 'expect';
import { authorsFormattedDropDown } from '../src/selectors/selectors';

describe("Author selectors", ()=>{

  describe("authorsformattedDropDown", ()=>{

    it("should return formatted data for use in a drop down", ()=>{
      const authors = [
        { id: "brian-l", firstName: "Brian", lastName: "Lusina"},
        { id: "beethoven-m", firstName: "Beethoven", lastName: "M"}
      ];

      const expected = [
        {value: "brian-l", text:"Brian Lusina"},
        {value: "beethoven-m", text:"Beethoven M"}
      ];

      expect(authorsFormattedDropDown(authors)).toEqual(expected);
    });

  });

});
