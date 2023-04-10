<?php

namespace Groupidd\Common;

class CommonFunc
{

    // ENCRYPT
    public static function strEncrypt($fromStr, $key)
    {
        $size = mcrypt_get_iv_size(MCRYPT_CAST_128, MCRYPT_MODE_CFB);
        $iv = mcrypt_create_iv($size, MCRYPT_RAND);
        $key = str_pad($key, 16, chr(0));

        $toStrEncrypted = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $fromStr, MCRYPT_MODE_ECB, $iv);
        $toStrEncode = base64_encode($toStrEncrypted);

        return $toStrEncode;
    }

    // DECRYPT
    public static function strDecrypt($fromStr, $key)
    {
        $size = mcrypt_get_iv_size(MCRYPT_CAST_128, MCRYPT_MODE_CFB);
        $iv = mcrypt_create_iv($size, MCRYPT_RAND);
        $key = str_pad($key, 16, chr(0));

        $toStrDecrypted = base64_decode($fromStr);
        $toStrDecode = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, $toStrDecrypted, MCRYPT_MODE_ECB, $iv);

        return $toStrDecode;
    }

    public static function stringEncrypt($fromStr, $key)
    {
        return base64_encode(openssl_encrypt($fromStr, 'AES-256-CBC', hash('sha256', $key), true, substr(hash('sha256', $key), 0, 16)));
    }

    public static function stringDecrypt($fromStr, $key)
    {
        return openssl_decrypt(base64_decode($fromStr), 'AES-256-CBC', hash('sha256', $key), true, substr(hash('sha256', $key), 0, 16));
    }

    // NEW_ENCRYPT
    /*public static function strEncrypt($fromStr, $key){

        return strtoupper(bin2hex(openssl_decrypt($fromStr, "AES-256-CBC", $key, true, str_repeat(chr(0), 16))));
    }

    // NEW_DECRYPT
    public static function strDecrypt($fromStr, $key){

        return openssl_decrypt(hex2bin($fromStr), "AES-256-CBC", $key, true, str_repeat(chr(0), 16));
    }*/

    // 자바스크립트(alert & location)
    public static function jsAlert($msg = "", $action)
    {
        $jsStr = "<script>" . chr(13);

        if ($msg != "") {
            $jsStr = $jsStr . "alert('" . $msg . "');" . chr(13);
        }

        $jsStr = $jsStr . $action . chr(13);
        $jsStr = $jsStr . "</script>" . chr(13);
        echo $jsStr;
    }

    // 자바스크립트(confirm box & location)
    public static function jsConfirm($msg, $action)
    {
        $jsStr = "<script>" . chr(13);
        $jsStr = $jsStr . "if(confirm('{$msg}')==true){" . chr(13);
        $jsStr = $jsStr . $action . chr(13);
        $jsStr = $jsStr . "}else{" . chr(13);
        $jsStr = $jsStr . "history.go(-1);" . chr(13);
        $jsStr = $jsStr . "}</script>" . chr(13);

        echo $jsStr;
    }

    // select box value compare
    public static function getSelected($strValue1, $strValue2)
    {
        if (strtoupper(trim($strValue1)) == strtoupper(trim($strValue2))) {
            return "selected";
        }
    }

    // check box value compare
    public static function getChecked($strValue1, $strValue2)
    {
        if (strtoupper(trim($strValue1)) == strtoupper(trim($strValue2))) {
            return "checked";
        }
    }

    // XSS & Injection
    public static function verifyValue($value)
    {
        $value = $value != '' ? trim($value) : '';

        $value = str_ireplace("<object", "<x-object", $value);
        $value = str_ireplace("</object", "</x-object", $value);
        $value = str_ireplace("<style", "<x-style", $value);
        $value = str_ireplace("</style", "</x-style", $value);
        $value = str_ireplace("<script", "<x-script", $value);
        $value = str_ireplace("</script", "</x-script", $value);
        $value = str_ireplace("<embed", "<x-embed", $value);
        $value = str_ireplace("</embed", "</x-embed", $value);
        $value = str_ireplace('<video', '<x-video', $value);
        $value = str_ireplace('<audio', '<x-audio', $value);

        $value = str_ireplace("IcxMarcos", "", $value);
        $value = str_ireplace("gb2312", "", $value);
        $value = str_ireplace("encode", "", $value);
        $value = str_ireplace("session", "", $value);
        $value = str_ireplace("request", "", $value);

        $value = str_ireplace("and ", "", $value);
        $value = str_ireplace("or ", "", $value);
        $value = str_ireplace("delete ", "", $value);
        $value = str_ireplace("drop ", "", $value);
        $value = str_ireplace("insert ", "", $value);
        $value = str_ireplace("select ", "", $value);
        $value = str_ireplace("union ", "", $value);
        $value = str_ireplace("update ", "", $value);

        $value = str_ireplace("xp_cmdshell ", "", $value);
        $value = str_ireplace("xp_dirtree ", "", $value);
        $value = str_ireplace("xp_regread ", "", $value);
        $value = str_ireplace("exec ", "", $value);
        $value = str_ireplace("Openrowset ", "", $value);
        $value = str_ireplace("sp_", "", $value);

        $value = str_ireplace('javascript:', '', $value);
        $value = str_ireplace('onload', '', $value);
        $value = str_ireplace('onunload', '', $value);
        $value = str_ireplace('onreset', '', $value);
        $value = str_ireplace('onmouseover', '', $value);
        $value = str_ireplace('onmouseout', '', $value);
        $value = str_ireplace('onerror', '', $value);
        $value = str_ireplace('onfocus', '', $value);
        $value = str_ireplace('onkeyup', '', $value);

        $pattern = '/\"|\'|:|--|<|>|%|\(|\)|\+|;|&/';

        $lastTxt = preg_replace_callback($pattern, 'self::replacePattern', $value);

        return $lastTxt;
    }

    // injection pattern
    private static function replacePattern($matches)
    {
        switch ($matches[0]) {
            case '"':
                return "&quot;";
                break;
            case "'":
                return "´";
                break;
            case ":":
                return "&#58;";
                break;
            case "--":
                return "&#45;&#45;";
                break;
            case "<":
                return "&lt;";
                break;
            case ">":
                return "&gt;";
                break;
            case "%":
                return "&#37;";
                break;
            case "(":
                return "&#40;";
                break;
            case ")":
                return "&#41;";
                break;
            case "+":
                return "&#43;";
                break;
            case ";":
                return "&#59;";
                break;
            case "#":
                return "&#35;";
                break;
            case "&":
                return "&amp;";
                break;
        }
    }

    // replace htmlcode
    public static function replaceHtmlDecode($str, $script = "")
    {
        //기존 치환문자 땜에 넣어놨음.
        $str = str_replace("&amp;lt;", "<", $str);
        $str = str_replace("&amp;gt;", ">", $str);

        $str = str_replace("&amp;", "&", $str);

        $str = str_replace("&quot;", '"', $str);
        $str = str_replace("´", "'", $str);
        $str = str_replace("˝", "\"", $str);
        $str = str_replace("&#58;", ":", $str);
        $str = str_replace("&#59;", ";", $str);
        $str = str_replace("&#45;&#45;", "--", $str);
        $str = str_replace("&lt;", "<", $str);
        $str = str_replace("&gt;", ">", $str);
        $str = str_replace("&#37;", "%", $str);
        $str = str_replace("&#40;", "(", $str);
        $str = str_replace("&#41;", ")", $str);
        $str = str_replace("&#43;", "+", $str);
        $str = str_replace("&#59;", ";", $str);
        $str = str_replace("&#35;", "#", $str);
        $str = str_replace("&amp;", "&", $str);


        if ($script == "script") {
            $str = str_replace("<x-style", "<style", $str);
            $str = str_replace("</x-style", "</style", $str);
        }

        return $str;
    }

    // replace htmlcode
    public static function replaceToOGTag($str)
    {
        //기존 치환문자 땜에 넣어놨음.
        $str = str_replace("&amp;lt;", "<", $str);
        $str = str_replace("&amp;gt;", ">", $str);

        $str = str_replace("&amp;", "&", $str);

        $str = str_replace("&quot;", '"', $str);
        $str = str_replace("´", "'", $str);
        $str = str_replace("˝", "\"", $str);
        $str = str_replace("&#58;", ":", $str);
        $str = str_replace("&#59;", ";", $str);
        $str = str_replace("&#45;&#45;", "--", $str);
        $str = str_replace("&lt;", "<", $str);
        $str = str_replace("&gt;", ">", $str);
        $str = str_replace("&#37;", "%", $str);
        $str = str_replace("&#40;", "(", $str);
        $str = str_replace("&#41;", ")", $str);
        $str = str_replace("&#43;", "+", $str);
        $str = str_replace("&#59;", ";", $str);
        $str = str_replace("&#35;", "#", $str);
        $str = str_replace("&amp;", "&", $str);


        $str = str_replace("<br>", " ", $str);

        return $str;
    }

    // replace br tag
    public static function replaceBrTag($str)
    {
        if (empty($str)) return '';

        $str = str_replace("&amp;lt;", "<", $str);
        $str = str_replace("&amp;gt;", ">", $str);

        $str = str_replace("&lt;", "<", $str);
        $str = str_replace("&gt;", ">", $str);

        return $str;
    }


    // replace br tag
    public static function replaceHrefTag($str)
    {
        if (empty($str)) return '';

        $str = str_replace("&#58;", ":", $str);
        $str = str_replace("&amp;", "&", $str);

        $str = self::makeHttp($str);

        return $str;
    }


    public static function replaceHrefTagtwo($str)
    {
        if (empty($str)) return '';

        $str = str_replace("&#58;", ":", $str);
        $str = str_replace("&amp;", "&", $str);

        return $str;
    }


    // remove Tag
    public static function stripTag($str)
    {
        $str = strip_tags($str);
        $str = str_replace("&nbsp;", " ", $str);
        return $str;
    }

    // string reduction
    public static function cutUtf8Str($str, $len, $tail = '')
    {
        $len = $len * 2;
        $c = substr(str_pad(decbin(ord($str{$len})), 8, '0', STR_PAD_LEFT), 0, 2);
        if ($c == '10')
            for (; $c != '11' && $c{0} == 1; $c = substr(str_pad(decbin(ord($str{--$len})), 8, '0', STR_PAD_LEFT), 0, 2)) ;

        return substr($str, 0, $len) . (strlen($str) - strlen($tail) >= $len ? $tail : '');
    }


    // paging (Page:현재페이지, pageSize : 페이지 사이즈, totalPage:페이지 전체갯수, param : 검색파라미터, pagingMax : 한페이지 페이지네이션 개수)
    public static function getPaging($Page, $PageSize, $TotalPage, $requestInfo, $pagingMax = "")
    {
        $pagingArea = "";
        if ($TotalPage > 1) {
            $intBlockPage = "";
            $i = "";

            if (!$pagingMax) $pagingMax = 10;    //노출 페이지 수
            $intBlockPage = (int)(($Page - 1) / $pagingMax) * $pagingMax + 1;

            // 이전 페이지 번호 계산
            $intBlockPage2 = $intBlockPage - $pagingMax;
            if ($intBlockPage2 < 1) {
                $intBlockPage2 = 1;
            }

            $pagingArea = "<ul class=\"pagination\">\n";

            $requestInfo['page'] = 1;
            $pagingArea .= "<li class=\"pagination__item pagination__control pagination__item--first\">\n";
            $pagingArea .= "    <a href=\"?" . http_build_query($requestInfo) . "\" class=\"pagination__link\">\n";
            $pagingArea .= "        <span class=\"pagination__page\">\n";
            $pagingArea .= "            처음\n";
            $pagingArea .= "        </span>\n";
            $pagingArea .= "    </a>\n";
            $pagingArea .= "</li>\n";

            if ($intBlockPage > 1) {
                $requestInfo['page'] = $intBlockPage2;

                $pagingArea .= "<li class=\"pagination__item pagination__control pagination__item--prev\">\n";
                $pagingArea .= "    <a href=\"?" . http_build_query($requestInfo) . "\"><span class=\"pagination__link\">";
                $pagingArea .= "        <span class=\"pagination__page\">";
                $pagingArea .= "            이전";
                $pagingArea .= "        </span>";
                $pagingArea .= "    </span></a>";
                $pagingArea .= "</li>";
            } else {
                $pagingArea .= "<li class=\"pagination__item pagination__control pagination__item--prev pagination__item--disabled\">\n";
                $pagingArea .= "    <span class=\"pagination__link\">";
                $pagingArea .= "        <span class=\"pagination__page\">";
                $pagingArea .= "            이전";
                $pagingArea .= "        </span>";
                $pagingArea .= "    </span>";
                $pagingArea .= "</li>";
            }

            $i = 1;
            do {
                if ((int)$intBlockPage == (int)$Page) {
                    $pagingArea .= "<li class=\"pagination__item pagination__item--current\">\n";
                    $pagingArea .= "    <strong class=\"pagination__link\">";
                    $pagingArea .= "        <span class=\"pagination__page\">";
                    $pagingArea .= $intBlockPage;
                    $pagingArea .= "        </span>";
                    $pagingArea .= "    </strong>";
                    $pagingArea .= "</li>\n";
                } else {
                    $requestInfo['page'] = $intBlockPage;

                    $pagingArea .= "<li class=\"pagination__item\">\n";
                    $pagingArea .= "    <a href=\"?" . http_build_query($requestInfo) . "\" class=\"pagination__link\">";
                    $pagingArea .= "        <span class=\"pagination__page\">\n";
                    $pagingArea .= $intBlockPage;
                    $pagingArea .= "        </span>\n";
                    $pagingArea .= "    </a>\n";
                    $pagingArea .= "</li>\n";
                }

                $intBlockPage = $intBlockPage + 1;
                $i = $i + 1;
            } while ($i <= $pagingMax && $intBlockPage <= $TotalPage);


            if ($intBlockPage <= $TotalPage) {
                $requestInfo['page'] = $intBlockPage;
                $pagingArea .= "<li class=\"pagination__item pagination__control pagination__item--next\">\n";
                $pagingArea .= "    <a href=\"?" . http_build_query($requestInfo) . "\"><span class=\"pagination__link\">";
                $pagingArea .= "        <span class=\"pagination__page\">";
                $pagingArea .= "            다음";
                $pagingArea .= "        </span>";
                $pagingArea .= "    </span></a>";
                $pagingArea .= "</li>";
            } else {
                $pagingArea .= "<li class=\"pagination__item pagination__control pagination__item--next pagination__item--disabled\">\n";
                $pagingArea .= "    <span class=\"pagination__link\">";
                $pagingArea .= "        <span class=\"pagination__page\">";
                $pagingArea .= "            다음";
                $pagingArea .= "        </span>";
                $pagingArea .= "    </span>";
                $pagingArea .= "</li>";
            }

            $requestInfo['page'] = $TotalPage;
            $pagingArea .= "<li class=\"pagination__item pagination__control pagination__item--last\">\n";
            $pagingArea .= "    <a href=\"?" . http_build_query($requestInfo) . "\" class=\"pagination__link\">\n";
            $pagingArea .= "        <span class=\"pagination__page\">\n";
            $pagingArea .= "            마지막\n";
            $pagingArea .= "        </span>\n";
            $pagingArea .= "    </a>\n";
            $pagingArea .= "</li>\n";

            $pagingArea .= "</ul>" . chr(13);
        }
        return $pagingArea;
    }


    // ajax paging (Page:현재페이지, pageSize : 페이지 사이즈, totalPage:페이지 전체갯수, param : 검색파라미터, pagingMax : 한페이지 페이지네이션 개수)
    public static function getPagingAjax($Page, $PageSize, $TotalPage, $requestInfo, $pagingMax = "", $requestExtraString = "", $callPageUrl = "")
    {
        $pagingArea = "";
        if ($TotalPage > 1) {

            if (!$pagingMax) $pagingMax = 10;    //노출 페이지 수
            $intBlockPage = (int)(($Page - 1) / $pagingMax) * $pagingMax + 1;

//<!--        <a href="#" class="first"><span class="blind">첫페이지로</span></a>-->
//<!--        <a href="#" class="last"><span class="blind">마지막페이지로</span></a>-->

            // 이전 페이지 번호 계산
            $intBlockPage2 = $intBlockPage - $pagingMax;
            if ($intBlockPage2 < 1) {
                $intBlockPage2 = 1;
            }

            $pagingArea = "<div class=\"pagination\">" . chr(13);

            if ($intBlockPage > 1) {
                $requestInfo['page'] = $intBlockPage2;
                $pagingArea .= "<a href='{$callPageUrl}?" . http_build_query($requestInfo) . "{$requestExtraString}' class=\"pre\"><span class=\"blind\">이전페이지</span></a>" . chr(13);
            } else {
                $pagingArea .= "<a href='#none' class=\"pre\"><span class=\"blind\">이전페이지</span></a>" . chr(13);
            }

            $i = 1;
            do {
                if ((int)$intBlockPage == (int)$Page) {
                    $pagingArea .= "<a href='#none' class=\"num on\">" . $intBlockPage . "</a>" . chr(13);
                } else {
                    $requestInfo['page'] = $intBlockPage;
                    $pagingArea .= "<a href='{$callPageUrl}?" . http_build_query($requestInfo) . "{$requestExtraString}' class=\"num\">" . $intBlockPage . "</a>" . chr(13);
                }

                $intBlockPage = $intBlockPage + 1;
                $i = $i + 1;
            } while ($i <= $pagingMax && $intBlockPage <= $TotalPage);


            if ($intBlockPage <= $TotalPage) {
                $requestInfo['page'] = $intBlockPage;
                $pagingArea .= "<a href='{$callPageUrl}?" . http_build_query($requestInfo) . "{$requestExtraString}' class=\"next\" ><span class=\"blind\">다음페이지</span></a>" . chr(13);
            } else {
                $pagingArea .= "<a href='#none' class=\"next\"><span class=\"blind\">다음페이지</span></a>" . chr(13);
            }

            $pagingArea .= "</div>" . chr(13);
        }
        return $pagingArea;
    }

    // fileupload function (jpeg|jpg|gif|png) , filetype:image/doc
    public static function uploadFile($upload_root, $file_inputbox_name, $upload_dir, $max_filesize = "", $usable_filetype = "image", $ori_filename = false)
    {

        // 파일업로드 용량 설정 : 5MB 제한
        if (empty($max_filesize)) $max_filesize = 1024 * 1024 * 2;

        $error = $_FILES[$file_inputbox_name]['error'];
        if ($error != UPLOAD_ERR_OK) {
            switch ($error) {
                case UPLOAD_ERR_INI_SIZE:
                case UPLOAD_ERR_FORM_SIZE:
                    return "error : filesize";
                    break;
                case UPLOAD_ERR_NO_FILE:            // 첨부파일이 없을 경우
                    return "";
                    break;
                default:
                    return "error : file upload error";
                    break;
            }
        }

        // upload folder exist check
        if (!is_dir($upload_root . $upload_dir))
            mkdir($upload_root . $upload_dir, 0777, true);


        $upfile_temp = $_FILES[$file_inputbox_name]['tmp_name'];
        $upfile_name = $_FILES[$file_inputbox_name]['name'];
        $file_size = $_FILES[$file_inputbox_name]['size'];
        $extension = pathinfo($_FILES[$file_inputbox_name]['name'], PATHINFO_EXTENSION);
//        $file_type        = $_FILES[$file_inputbox_name]['type'];

        if (is_uploaded_file($upfile_temp)) {

            // file size check
            if ($file_size > $max_filesize) {
                return "error : size";
            }

            // file extension check
            if ($usable_filetype == "doc") {
                if (!(preg_match("/doc|docx|ppt|pptx|xls|xlsx|xml|pdf|txt/i", $extension))) {
                    return "error : extension";
                }
            } else if ($usable_filetype == "image") {
                if (!(preg_match("/jpeg|jpg|gif|png/i", $extension))) {
                    return "error : extension";
                }

                // 실제 이미지 파일인지 확인 (image 파일명으로 파일 변조 막기)
                if (getimagesize($upfile_temp) == false) {
                    return "error : noimage";
                }
            } else if ($usable_filetype == "all") {
                if (!(preg_match("/doc|docx|ppt|pptx|xls|xlsx|zip|jpeg|jpg|gif|png|txt/i", $extension))) {
                    return "error : extension";
                }
            }

            // unique file name check (use the hash filename)
            $temp_filename = hash('md5', md5(microtime()));

            if ($ori_filename == true) {
                $temp_filename .= "__" . $upfile_name;
            }

            $file_index = 0;

            while (file_exists($upload_root . $upload_dir . "/" . $temp_filename . "." . $extension)) {
                $temp_filename = $temp_filename . "_" . $file_index;
                $file_index++;
            };


            $real_filename = $temp_filename . "." . $extension; //실제파일명
            $destination = $upload_root . $upload_dir . "/" . $real_filename;
            $temp_path = $upfile_temp;
            if (!move_uploaded_file($temp_path, $destination)) ;

            return $real_filename;

        } else {
            return "";
        }
    }

    /** FILE MIME TYPE RETURN
     * @param $file
     * @return bool|mixed|string
     */
    public static function get_mime($file)
    {
        if (function_exists("finfo_file")) {
            $finfo = finfo_open(FILEINFO_MIME_TYPE); // return mime type ala mimetype extension
            $mime = finfo_file($finfo, $file);
            finfo_close($finfo);
            return $mime;
        } else if (function_exists("mime_content_type")) {
            return mime_content_type($file);
        } else if (!stristr(ini_get("disable_functions"), "shell_exec")) {
            // http://.com/a/134930/1593459
            $file = escapeshellarg($file);
            $mime = shell_exec("file -bi " . $file);
            return $mime;
        } else {
            return false;
        }
    }

    public static function multipleFormReorder($array)
    {
        $newArray = [];
        foreach ($array as $key => $tempArray) {
            $index = 0;
            foreach ($tempArray as $newKey => $value) {
                # code...
                $newArray[$index][$key] = $value;
                $index++;
            }
        }

        return $newArray;
    }

    public static function getRandom($type = '', $len = 10)
    {
        $lowercase = 'abcdefghijklmnopqrstuvwxyz';
        $uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $numeric = '0123456789';
        $special = '`~!@#$%^&*()-_=+\\|[{]};:\'",<.>/?';
        $key = '';
        $token = '';
        if ($type == '') {
            $key = $lowercase . $uppercase . $numeric;
        } else {
            if (strpos($type, '09') > -1) $key .= $numeric;
            if (strpos($type, 'az') > -1) $key .= $lowercase;
            if (strpos($type, 'AZ') > -1) $key .= $uppercase;
            if (strpos($type, '$') > -1) $key .= $special;
        }
        for ($i = 0; $i < $len; $i++) {
            $token .= $key[mt_rand(0, strlen($key) - 1)];
        }

        return $token;
    }

    public static function makeHttp($val)
    {
        if (strlen($val) > 0) {
            if (strpos($val, 'ttp') > 0) {
                return $val;
            } else {
                return "http://" . $val;
            }

        } else {
            return '';
        }
    }

    function str_mask($str, $start = 0, $length = null)
    {
        $mask = preg_replace("/\S/", "*", $str);
        if (is_null($length)) {
            $mask = substr($mask, $start);
            $str = substr_replace($str, $mask, $start);
        } else {
            $mask = substr($mask, $start, $length);
            $str = substr_replace($str, $mask, $start, $length);
        }
        return $str;
    }

    public static function isNumber($val, $check_null = false)
    {
        if ($check_null) {
            if (!$val) {
                return false;
            }
        }
        return preg_match('/^[0-9]*$/', $val);
    }

    public static function isJson($string) {
        return is_string($string) && is_array(json_decode($string, true)) && (json_last_error() == JSON_ERROR_NONE) ? true : false;
    }

	public static function letterMasking($_type, $_data)
    {
        if (!empty($_data)) {
            $_data = str_replace('-', '', trim($_data));
            $strlen = mb_strlen($_data, 'utf-8');
            $maskingValue = "";
            $useHyphen = "";
            if ($_type == 'N') {
                switch ($strlen) {
                    case 2:
                        $maskingValue = mb_strcut($_data, 0, 3, "UTF-8") . '*';
                        break;
                    case 3:
                        $maskingValue = mb_strcut($_data, 0, 3, "UTF-8") . '*' . mb_strcut($_data, 8, 11, "UTF-8");
                        break;
                    case 4:
                        $maskingValue = mb_strcut($_data, 0, 3, "UTF-8") . '**' . mb_strcut($_data, 12, 15, "UTF-8");
                        break;
                    default:
                        $maskingValue = mb_strcut($_data, 0, 3, "UTF-8") . '**' . mb_strcut($_data, 12, 15, "UTF-8");
                        break;
                }
            } else if ($_type == 'P') {
                switch ($strlen) {
                    case 10:
                        $maskingValue = mb_substr($_data, 0, 3) . "{$useHyphen}***{$useHyphen}" . mb_substr($_data, 6, 4);
                        break;
                    case 11:
                        $maskingValue = mb_substr($_data, 0, 3) . "{$useHyphen}****{$useHyphen}" . mb_substr($_data, 7, 4);
                        break;
                    default:
                        $maskingValue = mb_substr($_data, 0, 3) . "{$useHyphen}****{$useHyphen}" . mb_substr($_data, 7, 4);
                        #trigger_error('Not a known format parametter in function', E_USER_NOTICE);
                        break;
                }
            } else if ($_type == 'E') {
                $em = explode("@", $_data);
                $name = implode(array_slice($em, 0, count($em) - 1), '@');
                $len = floor(strlen($name) / 2);

                $maskingValue = substr($name, 0, $len) . str_repeat('*', $len) . "@" . end($em);
            } else {
                #trigger_error('Masking Function Parameter Error', E_USER_NOTICE);
            }
            return $maskingValue;
        } else {
            return $_data;
        }
    }

}
