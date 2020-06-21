files="$@"
mkdir -p assets/downloaded_pics
for file in $files; do
    for key in imageurl imageurl_one imageurl_two; do
        url=$(grep $key $file | awk '{ print $2 }')
        echo $url
        if [[  "$url" =~ "http" ]]; then
            image_file="assets/downloaded_pics/$(basename ${file%.*})_photo${key#"imageurl"}.jpg"
            echo $image_file
            curl -q -k -o $image_file $url
            sed -i'' -e "s@$url@../$image_file@g" $file
        fi
    done
done