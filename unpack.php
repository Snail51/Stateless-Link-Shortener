<?php
/*
---------------------------------------
Take a series of URI parameters that match the syntax of the Rapid-Tree-Notetaker
(such that they represent a link), and navigate to it.

In effect, this makes a stateless link shortener.
-----------------------------
*/

// enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if(isset($_GET['data']))
{
    $data=$_GET['data'];
}
else
{
    $data="null";
}

if(isset($_GET['enc']))
{
    $encoding=$_GET['enc'];
}
else
{
    $encoding="URI-B64";//fallback
}

if(isset($_GET['cmpr']))
{
    $compression=$_GET['cmpr'];
}
else
{
    $compression="ZLIB";//fallback
}

if($data == "null")
{
    $output = "Error\n\tNo data parameter provided";
}
else
{
    $url = "https://example.com/handler.ext?enc=$encoding&cmpr=$compression&data=$data";
    $cmd = "node ./decompressor.js \"$url\"";
    $output = shell_exec($cmd);
}

//$output = preg_replace('/[^A-Za-z0-9\n\t\ └├│─​]/', "�", $output);

$exe_data = explode("\n", $output)[0];
$exe_data = preg_replace('/\s*$/', '', $exe_data); //prune whitespace from end

//impose length limits to avoid breaking previews
$exe_title = substr($exe_data, 0, 60) . "...";

//replace document contents with payloads
$content = file_get_contents('./redirect.html');
$content = str_replace("{{pageTitle}}", $exe_title, $content);
$content = str_replace("{{description}}", "View this shortened link", $content);
$content = str_replace("{{tags}}", "Link Shortener,Link,Tool,Free,URL Shortener,URL", $content);
$content = str_replace("{{siteName}}", $_SERVER["SERVER_NAME"], $content);
$content = str_replace("{{siteURL}}", $_SERVER["SERVER_NAME"], $content);
$content = str_replace("{{icon}}", "./link.svg", $content);
$content = str_replace("{{redirect}}", $exe_data, $content);

// return the content (pass the html to the browser for rendering)
echo $content;

exit; 

?>
