<?php 
    // class list 
    $panelClass="inputPanel";
    $panelInputsClass="panelInputs";
    $titleClass="tradingTitle";
    $cityButtonClass="cityButton";
    $commodityButtonClass="commodityButton";
    $submitButtonClass="tradingSubmitButton";


    $outputMessage='';
    $inputPanel=
    '
        <div class="'.$panelClass.'">
        
            <label>City</label>
            </br>
            <input class="'.$panelInputsClass.'" id="cityInput"></input>
            </br>
            <label>Commodity</label>
            </br>
            <input class="'.$panelInputsClass.'" id="commodityInput"></input>
            </br>
            <label>Buying Price</label>
            </br>
            <input class="'.$panelInputsClass.'" id="buyingPriceInput"></input>
            </br>
            <label>Selling Price</label>
            </br>
            <input class="'.$panelInputsClass.'" id="sellingPriceInput"></input>
            </br>
            <button class="'.$submitButtonClass.'"onclick="handleSubmitButton()">Submit</button>
        </div>
    ';
    $titleText='Trade Route Information';
    
    $citiesArea='<div id="citiesArea"></div>';
    $commoditiesArea='<div id="commoditiesArea"></div>';
    $infoArea='<div id="infoArea"></div>';
    $tradeRouteArea='<div id="tradeRouteArea"></div>';

    $displayRow=
    '
        <div class="row">'
        .$infoArea. 
        $tradeRouteArea.
        '</div>
    ';
    
    $title =
        '
            <h1 class="'.$titleClass.'">'.$titleText.'</h1>
            
            
            <script src="js/tradingScripts.js"></script>
        ';
    $outputMessage=
        '<div class="tradePage">'.
        $title
        .$inputPanel
        
        .$citiesArea
        .$commoditiesArea
       
        .$displayRow.'</div>';
        
    echo $outputMessage;
?>