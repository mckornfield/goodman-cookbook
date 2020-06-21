files="$@"
for file in $files; do
    url=$(grep imageurl $file | awk '{ print $2 }')
    echo $url
    if [[  "$url" =~ "http" ]]; then
        image_file="assets/real_pics/$(basename ${file%.*})_photo.jpg"
        echo $image_file
        curl -q -k -o $image_file $url
        sed -i'' -e "s@$url@$image_file@g" $file
    fi
done