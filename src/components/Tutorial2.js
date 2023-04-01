import React from 'react'
import { useState } from 'react'


export default function Tutorial2(props) 
{
    const [text , setText ] = useState('Enter Text Here');  /*Array Destructuring*/

    const OnChangeValue = (event)=>
    {
        setText(event.target.value);
    }

    const UpperCase = ()=>
    {
        setText( text.toUpperCase() );
    }

    const LowerCase = ()=>
    {
        setText( text.toLowerCase() );
    }

    const ClearText = ()=>
    {
        setText("")
    }
    const ReverseText = ()=>
    {
        let reversedString = text.split("").reverse().join("");
        setText(reversedString);

    }
    const RemoveSpaces = ()=>
    {
        let newString = text.replace(/\s/g, "");
        setText(newString);

    }
    const CapatalizeEachWord = ()=>
    {
        let words = text.split(" ")
        for (let i = 0; i < words.length; i++) 
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);

        let newString = words.join(" ");
        setText(newString);
    }
    const ConvertDate = ()=>
    {
        let dateObject = new Date(text);
        setText(dateObject.toDateString());
    }
    const GenerateRandomString = ()=>
    {
        let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        for (let i = 0; i < 50 ; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setText(result);
    }

    const CheckPalindrome = ()=>
    {
        let reversed = text.split("").reverse().join("");
        if(text===reversed)
            setText("Yes, It is a Palindrome");
        else
            setText("No, It is not a Palindrome");
    }

    const StringToSlug = ()=>
    {
        setText(text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, ""))
    }

    const LorumText = ()=>
    {
        let words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua."];
        let result = "";
        for (let i = 0; i < 100; i++) {
            result += words[Math.floor(Math.random() * words.length)] + " ";
        }
        setText(result);
    }

    const RemoveDuplicates = ()=>
    {
        let words = text.toLowerCase().split(" ");
        let uniqueWords = words.filter(function(word, index, self) {
            return index === self.indexOf(word);
        });
        setText(uniqueWords.join(" "));
    }

    const ReverseEachWord = ()=>
    {
        setText(text.split(" ").reverse().join(" "))   
    }
    const GenerateRepeatedText = ()=>
    {
        let repeated = text.repeat(50);
        setText(repeated);
    }
    const StringToAscii = ()=>
    {
        let ascii = "";
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            ascii += charCode.toString() + " ";
        }
        setText(ascii);          
    }
    const AsciiToString = ()=>
    {
        let ascii = text.split(" ");
        let string = "";
        for (let i = 0; i < ascii.length; i++) {
            let charCode = parseInt(ascii[i]);
            string += String.fromCharCode(charCode);
        }
        setText(string);

    }
    const StringToBinary = () =>
    {
        let binary = "";
        for (let i = 0; i < text.length; i++) {
          let charCode = text.charCodeAt(i);
          let binaryCode = charCode.toString(2);
          binary += binaryCode.padStart(8, "0") + " ";
        }
        setText(binary.trim());
    }
    const BinaryToString = () => 
    {
        let binary = text.split(" ");
        let string = "";
        for (let i = 0; i < binary.length; i++) {
            let charCode = parseInt(binary[i], 2);
            string += String.fromCharCode(charCode);
        }
        setText(string);
    }   
    
    const StringToHexadecimal = () =>
    {
        let hexadecimal = "";
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            let hexCode = charCode.toString(16);
            hexadecimal += hexCode.padStart(2, "0") + " ";
        }
        setText(hexadecimal.trim());
    }
    const hexadecimalToString = () =>
    {
        let hexadecimal = text.split(" ");
        let string = "";
        for (let i = 0; i < hexadecimal.length; i++) {
            let charCode = parseInt(hexadecimal[i], 16);
            string += String.fromCharCode(charCode);
        }
        setText(string);
    }
    const StringToDecimal = ()=>
    {
        let decimal = "";
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            decimal += charCode.toString() + " ";
        }
        setText(decimal.trim());
    }
    const DecimalToString = ()=>
    {
        let decimal = text.split(" ");
        let string = "";
        for (let i = 0; i < decimal.length; i++) {
            let charCode = parseInt(decimal[i]);
            string += String.fromCharCode(charCode);
        }
        setText(string);
    }
    const StringToOctal = ()=>
    {
        let octal = "";
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            let octalCode = charCode.toString(8);
            octal += octalCode.padStart(3, "0") + " ";
        }
        setText(octal.trim());
    }
    const OctalToString = ()=>
    {
        let octal = text.split(" ");
        let string = "";
        for (let i = 0; i < octal.length; i++) {
            let charCode = parseInt(octal[i], 8);
            string += String.fromCharCode(charCode);
        }
        setText(string);
    }
    const StringToBase64 = ()=>
    {
        let base64 = btoa(text);
        setText(base64);
    }
    const Base64ToString = ()=>
    {
        let base64 = atob(text);
        setText(base64);
    }
    const StringToUrl = ()=>
    {
        let url = encodeURIComponent(text);
        setText(url);
    }
    const UrlToString = ()=>
    {
        let url = decodeURIComponent(text);
        setText(url);
    }
    const StringToHtml = ()=>
    {
        let html = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        setText(html);
    }
    const HtmlToString = ()=>
    {
        let html = text.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
        setText(html);
    }
    const StringToRot13 = ()=>
    {
        let rot13 = "";
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                charCode = ((charCode - 65 + 13) % 26) + 65;
            }
            else if (charCode >= 97 && charCode <= 122) {
                charCode = ((charCode - 97 + 13) % 26) + 97;
            }
            rot13 += String.fromCharCode(charCode);
        }
        setText(rot13);
    }
    const Rot13ToString = ()=>
    {
        let rot13 = "";
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                charCode = ((charCode - 65 - 13) % 26) + 65;
            }
            else if (charCode >= 97 && charCode <= 122) {
                charCode = ((charCode - 97 - 13) % 26) + 97;
            }
            rot13 += String.fromCharCode(charCode);
        }
        setText(rot13);
    }

    
    const CopyText = ()=>
    {
        let textArea = document.getElementById("text-area");
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
    }
        
    return (
    <>
    <div className='container my-3'>
        <div className='mb-3 my-3'>
            <h5 className='heading'>{props.heading}</h5>
            <textarea id="text-area" className='form-control' rows="4" value={text} onChange={OnChangeValue}></textarea>
        </div>

        
        <button className="btn" onClick={UpperCase}>Convert To Uppercase</button>
        <button className="btn" onClick={LowerCase}>Convert To Lowercase</button>
        <button className="btn" onClick={ReverseText}>Reverse Text</button>
        <button className="btn" onClick={RemoveSpaces}>Remove Spaces</button>
        <button className="btn" onClick={CapatalizeEachWord}>Capatalize Each Word</button>
        <button className="btn" onClick={ConvertDate}>Convert To Date</button>
        <button className="btn" onClick={GenerateRandomString}>Generate Random String</button>
        <button className="btn" onClick={CheckPalindrome}>Check Palindrome</button>
        <button className="btn" onClick={StringToSlug}>Convert To Slug</button>
        <button className="btn" onClick={LorumText}>Generate Lorum Text</button>
        <button className="btn" onClick={RemoveDuplicates}>Remove Duplicates</button>
        <button className="btn" onClick={ReverseEachWord}>Reverse Each Word</button>
        <button className="btn" onClick={GenerateRepeatedText}>Generate Repeated Text</button>
        <button className="btn" onClick={StringToAscii}>Convert To Ascii</button>
        <button className="btn" onClick={AsciiToString}>Convert Ascii To String</button>
        <button className="btn" onClick={StringToBinary}>Convert To Binary</button>
        <button className="btn" onClick={BinaryToString}>Convert Binary To String</button>        
        <button className="btn" onClick={StringToHexadecimal}>Convert To Hexadecimal</button>
        <button className="btn" onClick={hexadecimalToString}>Convert Hexadecimal To String</button>
        <button className="btn" onClick={StringToDecimal}>Convert To Decimal</button>
        <button className="btn" onClick={DecimalToString}>Convert Decimal To String</button>
        <button className="btn" onClick={StringToOctal}>Convert To Octal</button>
        <button className="btn" onClick={OctalToString}>Convert Octal To String</button>
        <button className="btn" onClick={StringToBase64}>Convert To Base64</button>
        <button className="btn" onClick={Base64ToString}>Convert Base64 To String</button>
        <button className="btn" onClick={StringToUrl}>Convert To Url</button>
        <button className="btn" onClick={UrlToString}>Convert Url To String</button>
        <button className="btn" onClick={StringToHtml}>Convert To Html</button>
        <button className="btn" onClick={HtmlToString}>Convert Html To String</button>
        <button className="btn" onClick={StringToRot13}>Convert To Rot13</button>
        <button className="btn" onClick={Rot13ToString}>Convert Rot13 To String</button>

        <button className="btn" onClick={CopyText}>Copy Text</button>
        <button className="btn" onClick={ClearText}>Clear Text</button>

        <div className='container my-1'>
            <p className='text'><b>Words:</b> {text.split(" ").length-1} , Characters: {text.length}   </p>
            <p className='text'><b>Minimum Reading Time:</b> {0.008 * text.split(" ").length}s Per Word </p>
        </div>
    
    </div>
    
    </>
  )
}
