import React, {useState} from 'react'


export default function ManualTwo(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    //First letter capital only
    const handleFirstLetter = () => {
        // let caps = text.charAt(0).toUpperCase() + text.slice(1); //only for first string first letter caps
        const capitalize = (text) => {
            return text.charAt(0).toUpperCase() + text.slice(1);
        }
        const caps = text.split(' ').map(capitalize).join(' '); //All string first letter caps
        setText(caps);
        props.showAlert("First letter is Capital is On!", "success");
    }
 
    //All number value remove in string
    const handleRemoveNumber = () => {
        //replace(/\d+/g, ''); // try also this
        const NumberRemove = text.replace(/[0-9]/g, '');
        setText(NumberRemove);
        props.showAlert("All Remove Number in string!", "success");
    }
    
    //Remove character in string when lenght is 2
    const handleRemoveCharacter = () =>{
        const len = text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
        var texarr = [];
        for(var i=0; i<len; i++){
            // console.log(text.split(/[ ]+/)[i]);
            const checkText = text.split(/[ ]+/)[i];
            const checkLeng = checkText.length;
            if(2 >= checkLeng){
                checkText.replace(text.split(" ")[i], "");
            }
            else{
                texarr = texarr + checkText + " ";
            }
        }
        //set in remove character function
         setText(texarr);
         props.showAlert("Remove character less than length of 2!", "success");
    }

    const handleUniqueString = () => {
        const uniqueString = text.split(/\s+/).filter((element)=>{return element.length!==0});
        const uniquetest = [...new Set(uniqueString)]
        const uniqueSave = uniquetest.toString();
        const checkUnique = uniqueSave.replace(/,/g, ' ');
        setText(checkUnique);
        props.showAlert("Remove dublicat word in string", "success");
    }

    const handleBreakLineWord = () =>{
        // var texBreak = text.split(' ');
        //  var res = texBreak.join(" \n");
         const lenBreak = text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
            var breakArr = [];
            for(var i=0; i<lenBreak; i++){
                var texBreak = text.split(' ');
                var showBreakText = i + ". " + texBreak[i];
                breakArr.push(showBreakText);
            }
            const breakStr = breakArr.toString();
            const breakRip = breakStr.replace(/,/g, ' \n');
            setText(breakRip);
            props.showAlert("Break the line between two word and add count word!", "success");
    }

    const handleDotComma = () => {
        const dotcomma = text.replace(/\./g, "");
        setText(dotcomma);
        props.showAlert("Remove dot and comma from string!", "success");
    }

    ////////////////////////////////////////////////////////
    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h2 className='mb-4'>{props.heading}</h2>
            <div className="mb-3"> 
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <div className="first-btn-line">
                <button disabled={text.length===0} className="btn-sm btn btn-outline-success manual-btn-change  mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn-sm btn btn-outline-success manual-btn-change  mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn-sm btn btn-outline-success manual-btn-change  mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn-sm btn btn-outline-success manual-btn-change  mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn-sm btn btn-outline-success manual-btn-change  mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn-sm btn btn-outline-success manual-btn-change  mx-1 my-1" onClick={handleFirstLetter}>First Letter Cap</button>
                <button disabled={text.length===0} className="btn-sm btn btn-outline-success manual-btn-change  mx-1 my-1" onClick={handleRemoveNumber}>Number Remove</button>
                <button disabled={text.length===0} className="btn-sm btn btn-outline-success manual-btn-change  mx-1 my-1" onClick={handleUniqueString}>Unique & OneLine</button>
                <button disabled={text.length===0} className="btn-sm btn btn-outline-success manual-btn-change  mx-1 my-1" onClick={handleRemoveCharacter}>Character Remove</button>
                <button disabled={text.length===0} className="btn-sm btn btn-outline-success manual-btn-change  mx-1 my-1" onClick={handleBreakLineWord}>BreakLine Word</button>
                <button disabled={text.length===0} className="btn-sm btn btn-outline-success manual-btn-change  mx-1 my-1" onClick={handleDotComma}>DotComma Remove</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
            </>
    )
}
